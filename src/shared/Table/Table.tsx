import React from "react";
import "./Table.scss";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cookie</td>
          <td>1,25</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Leite</td>
          <td>5,25</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
