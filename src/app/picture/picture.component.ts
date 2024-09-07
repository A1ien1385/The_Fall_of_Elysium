import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { jsPDF } from 'jspdf';
import { DataService } from '../data.service';



@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [ReactiveFormsModule],  // Dodaj ReactiveFormsModule tutaj
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  dataService = inject(DataService);
  postForm!: FormGroup;
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [null]
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.postForm.patchValue({ image: file });
    this.selectedImage = file;
  }

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('title', this.postForm.value.title);
    formData.append('description', this.postForm.value.description);
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }
    console.log('Form Data:', formData);

    this.postForm.reset();
  }

  
  generatePDF() {
    const doc = new jsPDF();
  
    // Dodaj tytuł
    doc.setFontSize(20);
    doc.text(`${this.dataService.clientData.title}`, 20, 20);
  
    // Wymiary obrazka (zachowanie proporcji)
    const imageWidth = 40; // Nowa szerokość obrazka
    const imageHeight = (imageWidth / 2); // Proporcja 2:1 (przykład), dostosuj do właściwej proporcji
  
    // Dodaj obrazek
    doc.addImage(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcP8gSO07lyUkq1FYILk1Hxpy9aaOS4NFcg&s',
      'JPG',
      20,
      40, // Pozycja Y obrazka pod tytułem
      imageWidth, // Ustawiona szerokość
      imageHeight // Przeliczona wysokość zachowująca proporcje
    );
  
    // Dodaj opis pod obrazkiem
    doc.setFont('Helvetica');
    doc.setFontSize(12);
    doc.text(`${this.dataService.clientData.description}`, 20, 70 + imageHeight); // Dodanie wysokości obrazka do pozycji Y tekstu
  
    let yPOS = 50;

    

    // Zapisz PDF
    doc.save('picture.pdf');
  }
  
  
}
