import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Hemanth Store</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
          <p>Stock: {product.stock}</p>

          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              width="200"
            />
          )}

          <br />
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;