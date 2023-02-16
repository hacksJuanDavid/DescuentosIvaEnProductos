import { useState } from "react";

export default function Home() {
  //create states
  const [productUser, setProductUser] = useState<string>("");
  const [categoryUser, setCategoryUser] = useState<string>("");

  //Estructura de datos
  type Producto = {
    nombre: string;
    precio: number;
    categoria: string;
  };

  //Datos
  const productos: Producto[] = [
    { nombre: "Televisor", precio: 2000000, categoria: "Electrodomésticos" },
    { nombre: "Licuadora", precio: 500000, categoria: "Electrodomésticos" },
    { nombre: "Arroz", precio: 1000, categoria: "Alimentos" },
    { nombre: "Queso", precio: 50000, categoria: "Alimentos" },
    { nombre: "Café", precio: 1000000000, categoria: "Alimentos" },
  ];

  const calculateDiscount = (producto: Producto) => {
    //if producto.precio in range 100 to 2000000 calculate discount 19%
    if (producto.precio >= 100 && producto.precio <= 2000000) {
      //calculate discount
      let discount = producto.precio * 0.19;
      //calculate total
      let total = producto.precio - discount;

      //print jump line
      console.log(
        "Descuento del 19% para productos con el precio entre 100 y 2000000"
      );
      //print console data
      console.log("producto", producto);
      console.log("discount", discount);
      console.log("total", total);
      console.log(" ");
    } else {
      console.log(" Producto sin descuento del 19% ");
      //print console data
      console.log("producto", producto);
      console.log("discount", 0);
      console.log("total", producto.precio);
      console.log(" ");
    }
  };

  const ButtonSearchProducts = () => {
    //filter array with product user
    let productUserFilter = productos.filter(
      (producto) => producto.nombre === productUser
    );
    //calculate discount
    productUserFilter.map((producto) => {
      calculateDiscount(producto);
    });
  };

  const ButtonSearchCategories = () => {
    //calculate discount
    productos.map((producto) => {
      if (producto.categoria === categoryUser) {
        console.log(producto);
      }
    });
  };

  const HandleProductUser = (e: any) => {
      //get product user input value
      let productUser = e.target.value;
      setProductUser(productUser);
  };

  const HandleChange = (e: any) => {
      //get product user input value
      let categoryUser = e.target.value;
      setCategoryUser(categoryUser);
  };

  return (
    <>
      <h1>Tienda ...</h1>

      <div>
        <p>
          Este programa funciona por medio de la consola del navegador, por
          favor oprimir inspeccionar y seleccionar la opcion console.
        </p>
      </div>

      <div>
        <h1>Categorias</h1>
        <p>Seleccione una categoria escribala correctamente en el input:</p>
        <h5>Electrodomésticos</h5>
        <h5>Alimentos</h5>
        <input
          type="text"
          name="category"
          id="category"
          onChange={HandleChange}
        />
        <h5>Categoria escogida: {categoryUser}</h5>
        <button onClick={ButtonSearchCategories}>Buscar categoria</button>
      </div>

      <div>
        <h1>Productos</h1>
        <p>
          Escriba el nombre del producto correctamente que escogio en el input:
        </p>
        <input
          type="text"
          name="category"
          id="category"
          onChange={HandleProductUser}
        />
        <h5>Producto escogido: {productUser}</h5>
        <button onClick={ButtonSearchProducts}>Buscar producto</button>
      </div>

      <br />

      <div>
        <h1>Productos</h1>
        <button onClick={() => console.log(productos)}>
          Ver productos por consola
        </button>
      </div>
    </>
  );
}
