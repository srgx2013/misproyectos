
interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150.0
}

const tablet: Product = {
  description: 'ipad',
  price: 250.0
}
interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}
function taxCalculation(options: TaxCalculationOptions): number; {

}




const shoppingCart = [phone, tablet];
const tax = 0.15;









export { };
