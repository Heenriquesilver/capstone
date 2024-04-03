import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import { ReactComponent as Logo } from "../../assets/icons8-logo.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            COMPRAR
          </Link>
          <Link className="nav-link" to="/auth">
            ENTRAR
          </Link>
          <Link className="nav-link" to="/shop"></Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
