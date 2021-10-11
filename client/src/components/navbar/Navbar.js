import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbarList">
        <li className="navbarListItem">
          <Twitter />
        </li>
        <li className="navbarListItem">
          <Instagram />
        </li>
        <li className="navbarListItem">
          <LinkedIn />
        </li>
        <li className="navbarListItem">
          <Facebook />
        </li>
        <li className="navbarListItem">
          <GitHub />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
