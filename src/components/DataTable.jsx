 
// src/components/DataTable.js
import React from 'react';
import '../styles/Dashboard/DataTable.css';
 
const DataTable = ({ title, data, columns }) => {
  return (
<div className="data-table">
<h2>{title}</h2>
<table>
<thead>
<tr>
            {columns.map((column, index) => (
<th key={index}>{column}</th>
            ))}
</tr>
</thead>
<tbody>
          {data.map((row, rowIndex) => (
<tr key={rowIndex}>
              {columns.map((column, colIndex) => (
<td key={colIndex}>{row[column.toLowerCase().replace(/ /g, '')]}</td>
              ))}
</tr>
          ))}
</tbody>
</table>
</div>
  );
};
 
export default DataTable;