import classes from "./Navbar.module.css";
import { useState, useEffect, useRef, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ToggleButton } from "react-bootstrap";
import Link from "next/link";
import useWindowSize from "./WindowSize";

export default function NavBar(props) {
  const [select, setSelect] = useState(["Home"]);
  const style = classes.style;
  const size = useWindowSize();

  function navSelect(value) {
    setSelect(value);
    size.width < 992
      ? setTimeout(() => {
          document.getElementById("button").click();
        }, 700)
      : null;
  }

  return (
    <Fragment>
      <nav className={`navbar navbar-expand-lg ${classes.Navbar}`}>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img
              src="/logo-2.png"
              className={`d-inline-block align-top ${classes.link}`}
              alt="Hackers Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            id="button"
          >
            <img
              src="/fa-bar.png"
              className="d-inline-block align-top"
              alt="Hackers Logo"
            />
            {/*<FontAwesomeIcon icon={faBars} />*/}
          </button>
          <div className="navbar-collapse collapse" id="navbar">
            <div className="navbar-nav ms-auto">
              {Items.map((Item) => (
                <a
                  key={Item.label}
                  className={`nav-link ${classes.Nav} ${
                    Item.label == select ? style : ""
                  }`}
                  href={Item.path}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                  aria-controls="navbar"
                  onClick={() => navSelect(Item.label)}
                >
                  <h6 className={classes.NavItem}>{Item.label}</h6>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
const Items = [
  { label: "Home", path: "#Home" },
  { label: "About", path: "#About" },
  { label: "Live Now", path: "#Live_Now" },
  { label: "Events", path: "#Events" },
  { label: "FAQ", path: "#FAQ" },
  { label: "Contact Us", path: "#ContactUs" },
  { label: "Cheatsheet", path: "/cheatsheet" },
];
