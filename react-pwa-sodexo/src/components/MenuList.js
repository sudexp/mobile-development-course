import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ items }) => (
  <table>
    <tbody>{items && items.map((item, index) => <MenuItem item={item} key={index} />)}</tbody>
  </table>
);

export default MenuList;
