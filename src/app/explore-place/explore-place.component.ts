import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore-place',
  templateUrl: './explore-place.component.html',
  styleUrls: ['./explore-place.component.css']
})
export class ExplorePlaceComponent implements OnInit {
  location: String;

  constructor(private route: ActivatedRoute) {
    this.location = this.route.snapshot.paramMap.get('location');
  }

  ngOnInit() {
  }

}
