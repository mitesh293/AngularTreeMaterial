import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../car';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get("../assets/commondata/mydata.json");
  }
  public getCarsSmall() {
    return this.http.get('../assets/commondata/carlist.json')
                .toPromise()
                .then(res => <Car[]> res)
                .then(data => { return data; });
}
}
