import React from 'react';

const MathTable = ( {input} ) => {
  const Table = [];

  for (let i = 1; i <= 10; i++) {
    Table.push(
      <table>
        <tr>
          <td>{input}</td>
          <td>x</td>
          <td>{i}</td>
          <td>=</td>
          <td>{input * i}</td>
        </tr>
      </table>
    );
  }

  return (
    
       <table>
            {Table}
        </table>
    
  )
};

export default MathTable;
