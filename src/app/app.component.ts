import { HttpService } from './@http-service/http.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor(private httpService: HttpService) { }

  url: string = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-586EED3D-A84F-437E-9109-E4D418BC7A2D";

  area: Array<any> = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.httpService.getApi(this.url).subscribe((res: any) => {
      console.log(res.records.Locations[0].Location);
      let allData = res.records.Locations[0].Location;
      for (let data of allData) {
        console.log(data.LocationName);
        this.area.push(data.LocationName);
      }
    });
  }
}
