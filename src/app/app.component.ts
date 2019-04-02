import { Component, enableProdMode, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DataService } from './service/data.service';
import { Router } from '@angular/router';
import { Car } from './car';
import { MessageService, SelectItem } from 'primeng/primeng';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface TreeNode {
  name: string;
  children?: TreeNode[];
}

//const TREE_DATA: TreeNode[] = [


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Display Option';
  display: boolean = false;
  marked = false;
  radioSel:any;
  cols: any[];
  
  cars: Car[];
  selectedval: Car;
  radioSelected:string;
  theCheckbox = false;
  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();
  chield: any;
  values: string[];
  TREE_DATA: TreeNode[];
  selectdNodeName: String;
 
  constructor(private dataservice: DataService,private router:Router, private messageService: MessageService) {
    this.dataservice.getJSON().subscribe(data => {
     // console.log(data);
      this.TREE_DATA = data;
      this.dataSource.data = this.TREE_DATA;
    });
    this.dataservice.getCarsSmall().then(cars => this.cars = cars);
    //this.dataSource.data = this.TREE_DATA;
  }
  
  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Well Data Field' },
     
  ];
  
    
}
selectCarWithButton(car: Car) {
  this.selectedval = car;
  this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + car.vin});
}

onRowSelect(event) {
  this.selectedval.vin;
  this.messageService.add({severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin});
}

onRowUnselect(event) {
  this.messageService.add({severity:'info', summary:'Car Unselected', detail:'Vin: ' + event.data.vin});
}  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  logNode(node) {

    this.selectdNodeName = node.name;
    this.values = node.children;
    // if (node.children[1].children == null) {
    //   this.values = node.children;
    // }
    // else {
    //   this.values = null;
    // }
    //this.values=node.children;
    //console.log(this.values);
  }
  displayOption()
  {
    console.log("Redireting");
    this.router.navigate(['displayOption']);
  }
  toggleVisibility(e){
    console.log("Check Box");
    this.marked= e.target.checked;
    if(this.marked)
    {
      this.display = true;
    }
  }
  getSelecteditem(){
    this.radioSelected
  }
}
enableProdMode();