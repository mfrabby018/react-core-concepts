import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const owners=['Bill Gates', 'Elon Musk', 'Jeff Bezos', 'Jack Ma']
  const products =[
    {name: 'Photoshop', price:'$90'},
    {name: 'Illustrator', price:'$60'},
    {name: 'Lightroom', price:'$40'}
  ]
  // const productNames = products.map(product => product)
  // console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
        {/* <Product products={products[0]}></Product> */}
        {/* <Product price={}></Product> */}
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            owners.map(owner => <li>{owner}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product> )
        }

        {/* <Product products={products[0]}></Product> */}
        <Person name={owners[0]} owner="Microsoft"></Person>
        <Person name={owners[1]} owner="SpaceX"></Person>
        <Person name={owners[2]} owner ="Amazon"></Person>
        <Person name={owners[3]} owner ="Alibaba"></Person>



      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0)
  return(
    <div>
      <button onClick={() => setCount(count + 1)}>Add Movie</button>
      <h5>Number of Movies:{count} </h5>
    </div>
  )
} 
// react hook means its change the useState value
// setCount used for set a new value by user 
function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  // {
  //   // const newCount = count + 1;
  //   setCount(count + 1);
  // };
  return(
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{ /*useEffect used for load json data*/
    // console.log('callingEffect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return(
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){ /*props user for pass data dynamically*/
  const personStyle ={
    width: '450px',
    border: '2px solid lime',
    margin: '10px'
  }
  return(
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Owner of {props.owner}</h3>
    </div>
  )
}

export default App;
