import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as Logo } from "../../assets/icons8-logo.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SAIR
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              ENTRAR
            </Link>
          )}

          <Link className="nav-link" to="/shop"></Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
