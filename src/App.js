import "./styles.css";
import { useState, useEffect } from "react";
// side effect
export default function App() {
  // const api = `https://fakestoreapi.com/products${inc}`;
  const [data, setdata] = useState([]);
  const [product, setproduct] = useState(1);
  useEffect(() => {
    apidata();
  }, [product]);

  async function apidata() {
    const data = await fetch(`https://fakestoreapi.com/products/${product}`);
    const jsondata = await data.json();
    setdata(jsondata);
  }
  return (
    <div className="App">
      <h1>
        Api Date<button onClick={() => setproduct(product + 1)}>INC</button>
      </h1>
      <div>
        {product}
        <br />
        {data.title}
        <image src={data.image} />
        <br />
        {data.description}
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={product}
            onChange={(e) => {
              setproduct(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
