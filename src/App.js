import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Counter from "./pages/Counter";

function App() {
  return (
    <div className="App">
      <nav className="bg-blue-500 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/counter" className="hover:underline">
              Counter
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:underline">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
