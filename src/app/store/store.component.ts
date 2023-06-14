import { Component, Injector, Signal, effect, signal, OnInit, computed }
        from '@angular/core';
import { Product } from './models/product'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{

  public total: Signal<number>;
  public numProducts = signal<number>(0);
  public products = signal<Product[]>([]);

  constructor(private injector: Injector){}

  ngOnInit(): void {
    // Inicializo los productos
    this.products.set([
      {
        name: 'Product 1',
        price: 100,
        quantity: 1,
      }]);
      // Inicializo el numero de productos
      this.numProducts.set(this.products().length);
      // Si cambia los productos, modifico el total
      this.total = computed(() => {
        let sum =0;
        for (const p of this.products()){
          sum += p.price * p.quantity;
        }
        return sum;
      })

      // Effect para mostrar los cambios
    effect(() => {
      console.log(`${JSON.stringify(this.products())}`)
      console.log(`Num products ${this.numProducts()}`)
      console.log(`Total ${this.total()}`)
    }, { injector: this.injector })

  }

  less(product: Product) {
    // Actualizo el producto y se notifica que los productos han cambiado
    if (product.quantity > 0) {
      this.products.mutate(() => product.quantity--);
    }
  }
  more(product: Product) {
    // Actualizo el producto y se notifica que los productos han cambiado
    this.products.mutate(() => product.quantity++);
  }

  addProduct() {
    // Actualizo el numero de productos
    this.numProducts.update(value => value + 1);
    // Añado un producto y se notifica que los productos han cambiado
    this.products.mutate((products) =>
      products.push({
        name: 'Product ' + this.numProducts(),
        price: Math.floor(Math.random() * 901) + 100, // Entre 100 y 1000
        quantity: 1
      })
    )
  }

  reset() {
    // Actualizo todos los productos con la cantidad a 1
    this.products.mutate((products) => products.forEach(p => p.quantity = 1))
  }
}
