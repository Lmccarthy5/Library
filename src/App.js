import React, { useEffect, useState } from 'react'
import Nav from './componets/Nav.jsx'
import Footer from './componets/Footer.jsx';
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import { data } from './data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart.jsx';

function App() {
const [cart, setCart] = useState([])

function addToCart(book) {
setCart([...cart, {...book, quantity: 1}])
}

function changeQuantity(book, quantity) {
setCart(cart.map(item => 
   item.id === book.id
  ? {
      ...item,
      quantity: +quantity,
    } : item
  )
);
}

function removeItem(item) {
  setCart(cart.filter(book => book.id !== item.id))
}

function numberOfItems() {
  let counter = 0;
  cart.forEach(item => {
    counter =+ item.quantity
  })
  return counter
}

useEffect(() => {
  console.log(cart);
}, [cart])


  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books data={data} />}/>
        <Route path="/books/:id" element={<BookInfo data={data} addToCart={addToCart}
        cart={cart} />} />
        <Route path="/cart" element={<Cart data={data} cart={cart} changeQuantity={changeQuantity}
        removeItem={removeItem}/>}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
