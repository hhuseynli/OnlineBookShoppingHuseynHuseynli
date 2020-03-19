import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/constants';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  download:string=`${API_URL}/filedownload/files/`;
  image:string="";
  constructor(private service:FileService) { }

  ngOnInit() {
    this.image=this.service.image;
  }

}
