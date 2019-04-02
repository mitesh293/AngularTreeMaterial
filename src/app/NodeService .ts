import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NodeService {
   
    constructor(private http: HttpClient) {}
    

getFiles() {
   return this.http.get('http://localhost:4200/assets/data.json')
        .toPromise()
        .then(res => console.log(JSON.stringify(res)));
      /*  return this.http.get('http://localhost:4200/assets/data.json')
        .toPromise()
        .then(res => <TreeNode[]> res);*/
    }
}
