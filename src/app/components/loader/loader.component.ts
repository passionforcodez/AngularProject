import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  showLoader = false;

  constructor(private loader: LoaderService) { }

  ngOnInit(): void {
    this.loader.loading.subscribe(status => {
      this.showLoader = status;
    })
  }
}
