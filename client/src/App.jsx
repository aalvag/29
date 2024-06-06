import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data.result));
  }, []);

  if (!orders) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ordenes</h1>
      <div className="card">
        {orders.map((order) => (
          <div key={order._id}>
            <p>Numero de orden: {order.number}</p>
            <p>Estado {order.status}</p>
            <p>Total: {order.totalPrice}</p>
            {order.products.map((product) => (
              <div key={product.name}>
                <p>Producto: {product.name}</p>
                <p>Precio: {product.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

