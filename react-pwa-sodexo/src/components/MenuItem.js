import React from 'react';

const MenuItem = ({ item }) => (
  <tr>
    <td>
      <b>{item.category}</b>
      <br />
      {item.title_fi}
    </td>
    <td>{item.price}</td>
  </tr>
);

export default MenuItem;
