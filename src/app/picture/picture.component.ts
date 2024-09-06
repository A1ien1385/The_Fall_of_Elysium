import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [ReactiveFormsModule],  // Dodaj ReactiveFormsModule tutaj
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
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

    // Przesyłanie formularza do serwera, np. przez HttpClient
    // this.http.post('YOUR_API_URL', formData).subscribe(response => {
    //   console.log(response);
    // });

    this.postForm.reset();
  }
}
