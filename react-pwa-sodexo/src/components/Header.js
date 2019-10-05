import React from 'react';

const Header = ({ displayedDate }) => (
  <div className="header">
    <h1>JAMK Ravintola Bittipannu / Dynamo</h1>
    <h3>Lounas - {displayedDate}</h3>
  </div>
);

export default Header;
