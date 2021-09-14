import { Component } from "@angular/core";
import { IProduct } from "./product";

//since we defined the HTML file in the same folder as the component we can use the ./ relative path syntax here
@Component({
    selector: 'pm-products', //can be used as directive elsewhere
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          }
    ]; //array of any data type

    //methods listed after properties are defined

    toggleImage(): void { //void as it won't have return type
        this.showImage = !this.showImage; //not operator
    }
}