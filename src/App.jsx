import './App.css'
import Button from './components/Button'
import React, { useState } from 'react'


const user = {
  name: 'Mad Monkey',
  imageUrl: '/public/favicon.png',
  imageSize: 140,
};
const products = [
  {id: 1,title: 'Apple',url:'https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg',isFurit:true,size:300},
  {id: 2,title: 'Bannana',url:'https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png',isFurit:true,size:300},
  {id: 3,title: 'Tomatto',url: 'https://www.cylonies.com/storage/vegetables/tomato/xuntitled-1-540x600.jpg.pagespeed.ic.8eDCGUy48C.jpg',isFurit:false,size:300},
];

function App() {

  
  const [count,setCount] = useState(0);

  function handleClick(){
      setCount(count +1);
  }
  function handledClick(){
      setCount(count -1);
  }

  const listItems = products.map(product => 
    <li key={product.id}
        style={{color:product.isFurit?'red':'darkgreen'}}
    >{product.title} <img src={product.url} alt="img" width={product.size} height={product.size} /> </li>

  )

  return (
    <>
    <h1>{user.name}</h1>
    <img 
       src={user.imageUrl} 
       alt={'photo of'+ user.name}
       height={user.imageSize}
       width={user.imageSize}
       />
    <Button count={count} increase={handleClick} decrease={handledClick} />
    <h1>_________________________________________________________</h1>
    <Button count={count} increase={handleClick} decrease={handledClick} />
     <ul>{listItems}</ul>
    </>
  )
}

export default App
