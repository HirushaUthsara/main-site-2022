import classes from "./Navbar.module.css";
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import useWindowSize from "./WindowSize";
import useWindowPath from "./WindowPath";
import { useRouter } from 'next/router';

export default function NavBar(props) {
  const { asPath } = useRouter()

  const [select, setSelect] = useState(["Home"]);
  const [navItems, setNavItems] = useState(Items);
  const style = classes.style;
  const size = useWindowSize();
  const path = useWindowPath();

  useEffect(() => {
    if (asPath == "/") {
      setNavItems(ItemsHome);
    } else if (asPath == "/contact") {
      setNavItems(ItemsTeam);
    } else if (asPath == "/cheatsheet") {
      setNavItems(ItemsCheatsheet);
    }
  }, [asPath]);

  //console.log(path.path);

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
          </button>
          <div className="navbar-collapse collapse" id="navbar">
            <div className="navbar-nav ms-auto">
              {navItems.map((Item) => (
                <a
                  key={Item.label}
                  className={`nav-link ${classes.Nav} ${
                    Item.id == select ? style : ""
                  }`}
                  href={Item.path}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                  aria-controls="navbar"
                  onClick={() => navSelect(Item.id)}
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
const Items = [];
const ItemsHome = [
  {label: "Home", path: "#Home", id: "Home"},
  {label: "About", path: "#About", id: "About"},
  {label: "Live Now", path: "#Live_Now", id: "Live Now"},
  {label: "Events", path: "#Events", id: "Events"},
  {label: "FAQ", path: "#FAQ", id: "FAQ"},
  {label: "Contact Us", path: "#ContactUs", id: "Contact Us"},
  //{label: "Team", path: "/contact", id: "Team"},
  //{label: "Cheatsheet", path: "/cheatsheet", id: "Cheatsheet"},
];
const ItemsTeam = [
  {label: "Team", path: "/contact", id: "Home"},
  {label: "Home Page", path: "/", id: "Home Page"},
  //{label: "Cheatsheet", path: "/cheatsheet", id: "Cheatsheet"},
];
const ItemsCheatsheet = [
  {label: "Cheatsheet", path: "/cheatsheet", id: "Home"},
  {label: "Home Page", path: "/", id: "Home Page"},
  {label: "Team", path: "/contact", id: "Team"},
];
