import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

//since we defined the HTML file in the same folder as the component we can use the ./ relative path syntax here
@Component({
    selector: 'pm-products', //can be used as directive elsewhere
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _listFilter: string = '';
    get listFilter(): string { 
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] =[];
    products: IProduct[] = [
        // {
        //     "productId": 2,
        //     "productName": "Garden Cart",
        //     "productCode": "GDN-0023",
        //     "releaseDate": "March 18, 2021",
        //     "description": "15 gallon capacity rolling garden cart",
        //     "price": 32.99,
        //     "starRating": 4.2,
        //     "imageUrl": "assets/images/garden_cart.png"
        //   },
        //   {
        //     "productId": 5,
        //     "productName": "Hammer",
        //     "productCode": "TBX-0048",
        //     "releaseDate": "May 21, 2021",
        //     "description": "Curved claw steel hammer",
        //     "price": 8.9,
        //     "starRating": 4.8,
        //     "imageUrl": "assets/images/hammer.png"
        //   }
    ]; //array of any data type

    //note the accessor does not have to be private, remember to import ProductService
    constructor(private productService : ProductService) {}

    //methods listed after properties are defined

    //takes in list filter and returns filtered array of products, converts to lowercase. if list filter string is empty then returns all products
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void { //void as it won't have return type
        this.showImage = !this.showImage; //not operator
    }
//we must write code for every method in the interface
    ngOnInit() : void{
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
        //this.listFilter = 'cart';
    }

    onRatingClicked(message:string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}