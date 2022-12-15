import React from "react";
import "./Header.scss";
import { RootState } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/Authentication/Authentication.actions";
import Swal from "sweetalert2";

declare interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector((state: RootState) => ({
    profile: state.authentication.profile,
  }));

  const isLoggedIn = !!profile;

  const askToLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#09f",
      cancelButtonColor: "#d33",
    }).then(({ value }) => {
      value && dispatch(logout());
      navigate("/login");
    });
  };

  const handleLoginLogout = () => {
    isLoggedIn ? askToLogout() : navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <header className="AppHeader">
      <div className="navbar">
        <h1>{props.title}</h1>
        <ul className="nav-links">
          <Link to={"/products"}>Products</Link>
        </ul>
      </div>
      {profile && <button onClick={handleProfile}>Profile</button>}
      <button onClick={handleLoginLogout}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </header>
  );
};

export default Header;
