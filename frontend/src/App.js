import data from "./data.js";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {
            //Map objeto que contiene valores clave-valor
            //Realizamos un bucle y accedemos al array que contiene los productos
            //Esto se llama databinding, conecta elementos
            data.products.map((producto) => (
              //Para evitar valores duplicados ponemos key=""
              <div key={producto.slug} className="product">
                <a href={`/product/${producto.slug}`}>
                  <img src={producto.image} alt={producto.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${producto.slug}`}>
                    <p>{producto.name}</p>
                  </a>
                  <p>
                    <strong>{producto.price}€</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
};

export default App;
