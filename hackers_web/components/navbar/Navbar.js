import classes from "./Navbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props) {
  return (
    <>
      <nav class={`navbar navbar-expand-lg ${classes.Navbar}`}>
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src="/logo-2.png"
              className="d-inline-block align-top"
              alt="Hackers Logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div class="navbar-collapse collapse" id="navbar">
            <div class="navbar-nav ms-auto">
              {Items.map((Item) => (
                <a
                  className={`nav-link ${classes.Nav} ${Item.active}`}
                  href={Item.path}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                  aria-controls="navbar"
                >
                  <h7 className={classes.NavItem}>{Item.label}</h7>
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
  {label: "Home", path: "#Home", active:"active"},
  {label: "About", path: "#About"},
  {label: "Live Now", path: "#Live_Now"},
  {label: "Events", path: "#Events"},
  {label: "FAQ", path: "#FAQ"},
  {label: "Contact Us", path: "#ContactUs"},
  {label: "Cheatsheet", path: "/cheatsheet"},
];
