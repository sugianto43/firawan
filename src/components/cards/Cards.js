import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import data from "../../data/data";

function Cards() {
  console.log(data);
  return (
    <div className="cards-container">
      {data.map((datas, idx) => (
        <Link
          to={`/detail/${datas.id}`}
          style={{ textDecoration: "none" }}
          key={idx}
        >
          <div className="card">
            <div className="text">
              <p>
                Account Number: <span> {datas.accountNumber}</span>
              </p>
              <p>
                Currency: <span> {datas.currency}</span>
              </p>
              <p>
                Balance: <span> {datas.balance}</span>
              </p>
              <p>
                Last transaction date: <span> {datas.lastTransactionDate}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
