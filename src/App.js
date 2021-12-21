import logo from './logo.svg';
import './App.css';
import {Header} from './Header.js';
import {Product} from './Product.js';
import json from "./products.json";

function App() {
  // json.products[1].title

  let productos=json.products.map((obj)=>{return <Product item={obj}></Product>})

  return (
    <div className="App">
        <Header></Header>
        {/* <Product item={json.products[1]}></Product> */}
        {productos};
    </div>
  );
}

export default App;
