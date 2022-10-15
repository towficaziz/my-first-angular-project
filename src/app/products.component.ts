import { Component } from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProdectsComponent {
  productName = "A Book";
  isDisabled= true;

  constructor(){
    setTimeout(()=>{
      // this.productName="A tree";
      this.isDisabled= false;
     },3000);
  }
}
