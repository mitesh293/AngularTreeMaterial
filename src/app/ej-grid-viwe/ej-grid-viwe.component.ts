import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { SelectionSettingsModel, RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { GridComponent } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-ej-grid-viwe',
  templateUrl: './ej-grid-viwe.component.html',
  styleUrls: ['./ej-grid-viwe.component.scss']
})
export class EjGridViweComponent implements OnInit {
  public data: Object[];
  public selectionOptions: SelectionSettingsModel;
  public selectedRowsGlobal:String[]=[];
  public selcetedArraysLabels:String="";

  @ViewChild('grid')
  public grid: GridComponent;

  ngOnInit(): void {
      this.data = data;
      this.selectionOptions = { mode: 'Both' };
  }
  constructor() { }

  rowSelected(args: RowSelectEventArgs) {
    let selectedrowindex: number[] = this.grid.getSelectedRowIndexes();  // Get the selected row indexes.
    //alert(selectedrowindex); // To alert the selected row indexes.
    let selectedrecords: Object[] = this.grid.getSelectedRecords();  // Get the selected records.
    this.selectedRowsGlobal.push(selectedrecords[0].OrderID);
    this.selcetedArraysLabels = this.selectedRowsGlobal.join('');
    console.log(this.selcetedArraysLabels);
}
}
