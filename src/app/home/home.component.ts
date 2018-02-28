import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tourDetails: object[];

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.tourDetails = [
      {
        title: 'Andaman',
        imageUrl: '../../assets/bg-andaman.jpg',
        year: 2018,
        date: 'Feb 1 - Feb 6',
        description: 'Some nice 2 line description on the place. The land of rising sun!!'
      },
      {
        title: 'SriLanka',
        imageUrl: '../../assets/bg-srilanka.jpg',
        year: 2017,
        date: 'Oct 5 - Oct 13',
        description: 'Some nice 2 line description on the place. The land of rising sun!!'
      },
      {
        title: 'Sakaleshpur',
        imageUrl: '../../assets/bg-sakaleshpur.jpg',
        year: 2017,
        date: 'Nov 3 - Nov 5',
        description: 'Some nice 2 line description on the place. The land of rising sun!!'
      },
      {
        title: 'Thekkady',
        imageUrl: '../../assets/bg-thekkady.jpg',
        year: 2017,
        date: 'Jul 1 - Jul 6',
        description: 'Some nice 2 line description on the place. The land of rising sun!!'
      },
      {
        title: 'Coonoor',
        imageUrl: '../../assets/bg-coonoor.jpg',
        year: 2017,
        date: 'Apr 6 - Apr 8',
        description: 'Some nice 2 line description on the place. The land of rising sun!!'
      },
      {
        title: 'Krabi',
        imageUrl: '../../assets/bg-krabi.jpg',
        year: 2017,
        date: 'Feb 7 - Feb 15',
        description: 'Some nice 2 line description on the place. The land of rising sun!!'
      },
      {
        title: 'Bhutan',
        imageUrl: '../../assets/bg-bhutan.jpg',
        year: 2016,
        date: 'Oct 7 - Oct 13',
        description: 'Some nice 2 line description on the place. The land of rising sun!!'
      }
    ];
  }

}
