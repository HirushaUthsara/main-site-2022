import classes from "./Navbar.module.css";
import {useState, useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {ToggleButton} from "react-bootstrap";
import Link from "next/link";
import useWindowSize from "./WindowSize";

export default function NavBar(props) {
  const [select, setSelect] = useState(["Home"]);
  const style = classes.style;
  const size = useWindowSize();


  function navSelect(value) {
    setSelect(value);
    size.width<992?
    setTimeout(() => {
      document.getElementById("button").click();
    }, 700):null;
  }

  return (
    <>
      <nav class={`navbar navbar-expand-lg ${classes.Navbar}`}>
        <div class="container">
          <Link class="navbar-brand" href="/">
            <img
              src="/logo-2.png"
              className={`d-inline-block align-top ${classes.link}`}
              alt="Hackers Logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            id="button"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div class="navbar-collapse collapse" id="navbar">
            <div class="navbar-nav ms-auto">
              {Items.map((Item) => (
                <a
                  className={`nav-link ${classes.Nav} ${
                    Item.label == select ? style : ""
                  }`}
                  href={Item.path}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                  aria-controls="navbar"
                  onClick={() => navSelect(Item.label)}
                >
                  <h7 className={classes.NavItem}>
                    {Item.label}
                  </h7>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
const Items = [
  {label: "Home", path: "#Home"},
  {label: "About", path: "#About"},
  {label: "Live Now", path: "#Live_Now"},
  {label: "Events", path: "#Events"},
  {label: "FAQ", path: "#FAQ"},
  {label: "Contact Us", path: "#ContactUs"},
  {label: "Cheatsheet", path: "/cheatsheet"},
];
