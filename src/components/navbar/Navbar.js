import React from "react";
import "../../components/navbar/Navbar.css";
import logonavbar from "../../media/logonavbar.png";
import carritonavbar from "../../media/carritoNavbar.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => (state ? state.cart.length : 0));
  const [hoover, setHoover] = React.useState(false);
  return (
    <div classname="navbar-container">
      <img className="navbar-logo" src={logonavbar}></img>
      <input />
      <img
        className="navbarlogo2"
        src={carritonavbar}
        onMouseEnter={() => setHoover(true)}
        onMouseLeave={() => setHoover(false)}
      />
      {hoover ? state : null}

    </div>
    
  );
};

export default Navbar;
