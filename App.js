import React from "react";
import PerfumeDesktop from "./images/image-product-desktop.jpg";
import PerfumeMobile from "./images/image-product-mobile.jpg";
import Cart from "./images/icon-cart.svg";
import "./App.css";

function App() {
  return (
    <div>
      <main>
        <div className="image-container">
          <img
            src={PerfumeDesktop}
            alt="A picture of Gabrielle Essence Eau De Parfum "
          />
        </div>
        <div className="details">
          <p>PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum </h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <h2>
            $149.99 <span>$169.99 </span>
          </h2>

          <button>
            <img src={Cart} alt="A Cart" />
            Add to Cart
          </button>
        </div>
      </main>

      {/* <footer>Challenge by Frontend Mentor. Coded by dynamictech.</footer> */}
    </div>
  );
}

export default App;
