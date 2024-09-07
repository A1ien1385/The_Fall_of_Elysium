import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  clientData = {
    title: 'The Fall of Elysium',
    description: 'Some text...',
    informations: [
      {title: 'Some Title 1', date: '2024-07-09', author: 'Jorogumo2137', picture_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcP8gSO07lyUkq1FYILk1Hxpy9aaOS4NFcg&s'},
      {title: 'Some Title 2', date: '2024-07-09', author: 'Jorogumo2137', picture_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcP8gSO07lyUkq1FYILk1Hxpy9aaOS4NFcg&s'},
      {title: 'Some Title 3', date: '2024-07-09', author: 'Jorogumo2137', picture_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcP8gSO07lyUkq1FYILk1Hxpy9aaOS4NFcg&s'},
      {title: 'Some Title 4', date: '2024-07-09', author: 'Jorogumo2137', picture_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcP8gSO07lyUkq1FYILk1Hxpy9aaOS4NFcg&s'},
      {title: 'Some Title 5', date: '2024-07-09', author: 'Jorogumo2137', picture_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcP8gSO07lyUkq1FYILk1Hxpy9aaOS4NFcg&s'},
      {title: 'Some Title 6', date: '2024-07-09', author: 'Jorogumo2137', picture_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcP8gSO07lyUkq1FYILk1Hxpy9aaOS4NFcg&s'},
      {title: 'Some Title 7', date: '2024-07-09', author: 'Jorogumo2137', picture_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcP8gSO07lyUkq1FYILk1Hxpy9aaOS4NFcg&s'},
    ]
  }

  constructor() {

   }
}
