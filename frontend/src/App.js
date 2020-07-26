import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onclick="openMenu()">&#9776;</button>
          <a href="index.html">Vegan Supplements</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">SignIn</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categores</h3>
        <button className="sidebar-close-button" onclick="closeMenu()">
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Protien Powders</a>{" "}
          </li>
          <li>
            <a href="index.html">Vitamins</a>
          </li>
          <li>
            <a href="index.html">Clothing</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/orgain.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Protein Powder</a>
                </div>
                <div className="product-brand">Orogain</div>
                <div className="product-price">$40.00</div>
                <div className="product-ratings">5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/orgain.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Protein Powder</a>
                </div>
                <div className="product-brand">Orogain</div>
                <div className="product-price">$40.00</div>
                <div className="product-ratings">5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/orgain.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Protein Powder</a>
                </div>
                <div className="product-brand">Orogain</div>
                <div className="product-price">$40.00</div>
                <div className="product-ratings">5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/orgain.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Protein Powder</a>
                </div>
                <div className="product-brand">Orogain</div>
                <div className="product-price">$40.00</div>
                <div className="product-ratings">5 stars (10 reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserved</footer>
    </div>
  );
}

export default App;
