/* eslint-disable no-dupe-keys */
/* eslint-disable array-callback-return */
import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";
import "./Table.css";

function Table() {
  const params = useParams();
  const detailData = data[params.id];
  return (
    <>
      <div className="orders">
        Detail Transaction for Account:{" "}
        <span style={{ color: "#0088a9" }}> {detailData.accountNumber}</span>{" "}
      </div>
      <div
        className="table-contents table-responsive"
        style={{
          width: "auto",
        }}
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col-md" className="table-head">
                Date
              </th>
              <th scope="col-md" className="table-head">
                Currency
              </th>
              <th scope="col-md" className="table-head">
                Debit
              </th>
              <th scope="col-md" className="table-head">
                Credit
              </th>
              <th scope="col-md" className="table-head">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {detailData.transaction.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td className="data-table">
                    <p className="text-table">{data.date}</p>
                  </td>
                  <td className="data-table">
                    <p className="text-table">{data.currencys}</p>
                  </td>
                  <td className="data-table">
                    <p className="text-table">{data.debit}</p>
                  </td>
                  <td className="data-table">
                    <p className="text-table">{data.credit}</p>
                  </td>
                  <td className="data-table">
                    <p className="text-table">{data.description}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
