import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-submissions-map',
  templateUrl: './submissions-map.component.html',
  styleUrls: ['./submissions-map.component.scss']
})
export class SubmissionsMapComponent implements OnInit {

  // map: mapboxgl.Map;
  constructor() { }

  // declare const google: any;

  ngOnInit(): void {
    // mapboxgl.accessToken = '<your access token here>';
    const map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoiYnJpam5vb3JzaW5naCIsImEiOiJjbDljbjQwNGIxZDdvM29rOThla2tkMjlsIn0.aVdYfffInFUTMeowhu_DNg',
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [12.550343, 55.665957],
        zoom: 8
    });

    const marker1 = new mapboxgl.Marker()
.setLngLat([12.554729, 55.70651])
.addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat([12.65147, 55.608166])
.addTo(map);

    map.on('load', function () {
      this.map.resize();
  });
  }



}
