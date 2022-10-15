import { Component } from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProdectsComponent {
  productName = "A Book";
  isDisabled= true;
  products =['A book','A tree ']

  constructor(){
    setTimeout(()=>{
      // this.productName="A tree";
      this.isDisabled= false;
     },3000);
  }

  onAddProduct(form: any){
    // this.products.push(this.productName);
    if(form.valid){
      this.products.push(form.value.productName);
    }
  }

  OnRemoveProduct(productName: string){
    this.products= this.products.filter(p=> p !== productName);
  }
}
