import { Component } from "@angular/core";

//since we defined the HTML file in the same folder as the component we can use the ./ relative path syntax here
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {

}