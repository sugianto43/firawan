import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="text">
          <p>
            Account Number: <span> 234123452</span>
          </p>
          <p>
            Currency: <span> IDR</span>
          </p>
          <p>
            Balance: <span> 2.500.000</span>
          </p>
          <p>
            Last transaction date: <span> 21/04/2021</span>
          </p>
        </div>
      </div>

      <div className="card">
        <div className="text">
          <p>
            Account Number: <span> 234123452</span>
          </p>
          <p>
            Currency: <span> IDR</span>
          </p>
          <p>
            Balance: <span> 2.500.000</span>
          </p>
          <p>
            Last transaction date: <span> 21/04/2021</span>
          </p>
        </div>
      </div>

      <div className="card">
        <div className="text">
          <p>
            Account Number: <span> 234123452</span>
          </p>
          <p>
            Currency: <span> IDR</span>
          </p>
          <p>
            Balance: <span> 2.500.000</span>
          </p>
          <p>
            Last transaction date: <span> 21/04/2021</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
