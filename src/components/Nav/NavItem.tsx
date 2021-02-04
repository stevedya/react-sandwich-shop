import React from "react";
import { NavLink } from "react-router-dom";

type NavItemProps = {
    id: string;
    to: string;
    name: string;
};

const NavItem: React.FC<NavItemProps> =  ({id, to, name }) => {
  return (
    <li key={id}>
      <NavLink to={to}>{name}</NavLink>
    </li>
  );
};

export default NavItem;
