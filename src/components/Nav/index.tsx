import React from "react";
import NavItem from "./NavItem";

interface NavItemObj {
  id: string;
  name: string;
  to: string;
}
const NavItemsArray: NavItemObj[] = [
  { id: '1', name: "New Order", to: "/new-order" },
  { id: '2', name: "Orders", to: "/orders" }
];

const Nav = () => {
  return (
    <nav className="main-navigation">
      <div className="container">
        <div className="flex-wrap flex-centered">
          <img
            alt="sandwhich-logo"
            className="logo"
            src="https://www.svgrepo.com/show/21407/sandwich.svg"
          />
          <ul>
            {NavItemsArray.map((item) => {
              return <NavItem id={item.id} to={item.to} name={item.name} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
