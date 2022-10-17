import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'esnMenu',
  templateUrl: `esn-menu.component.html`,
  styleUrls: ['esn-menu.component.scss']
})
export class EsnMenuComponent implements OnInit {
@Input() data;
@Input() textColor;
@Input() themeColor;
@Input() fixed;


  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
  trims(txt){
    let result = txt.replace(/^\s+|\s+$/gm,'')
    result = result.replace(' ','')
    return result
  }
  t(v){
    return(typeof(v)==='string')
  }
 

}
