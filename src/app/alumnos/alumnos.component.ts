import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

    LIST: any[]=[
    {id:1,nombre:"wilmette",apellido:"segoe",nota:8.6},
    {id:2,nombre:"herta",apellido:"segoe",nota:2.9},
    {id:3,nombre:"pooh",apellido:"kirsopp",nota:6.2},
    {id:4,nombre:"allie",apellido:"melluish",nota:5.45},
    {id:5,nombre:"obadiah",apellido:"senyard",nota:2.4},
    {id:6,nombre:"marquita",apellido:"whatling",nota:10},
    {id:7,nombre:"claudell",apellido:"pulver",nota:5.666},
    {id:8,nombre:"boyd",apellido:"hooks",nota:3.11},
    {id:9,nombre:"drew",apellido:"wortt",nota:2.2},
    {id:10,nombre:"udall",apellido:"capponer",nota:6},
    {id:11,nombre:"susan",apellido:"leile",nota:8.4},
    {id:12,nombre:"torin",apellido:"wemes",nota:6.9},
    {id:13,nombre:"bern",apellido:"riche",nota:1.9},
    {id:14,nombre:"fee",apellido:"macKaile",nota:8.7},
    {id:15,nombre:"gretal",apellido:"ridout",nota:9.6}
  ]



  constructor(){}
  ngOnInit():void{
    
  }

}
