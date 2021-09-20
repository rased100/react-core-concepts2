import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternulUsers></ExternulUsers>
    </div>
  );
}

function ExternulUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Externul Users</h3>
      {
        users.map(users => <User name={users.name} email={users.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className="product">
      <h2>name: {props.name}</h2>
      <p>email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Products(props) {
  const productStyle = {
    border: '2px solid blue',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

/* 
const products = [
    { name: 'mobile', price: 15000 },
    { name: 'camera', price: 55000 },
    { name: 'laptop', price: 150000 },
    { name: 'watch', price: 5000 },
    { name: 'shoe', price: 500 },
  ]
*/

/* 
{
        products.map(product => <Products name={product.name} price={product.price}></Products>)
      }
      <Products name="mobile" price="15000"></Products>
      <Products name="laptop" price="15000"></Products>
      <Products name="camera" price="15000"></Products>
      <Products name="mobile" price="15000"></Products>
      <Products name="mobile" price="15000"></Products>
*/

export default App;
