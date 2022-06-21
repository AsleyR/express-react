import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles/Header/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Student Tracker</h1>
      <ul className="navbar">
        <li className="link-list">
          <Link to="/">Home</Link>
        </li>
        <li className="link-list">
          <Link to="/student-info">Student info</Link>
        </li>
        <li className="menu-bar">
          <FaBars style={barsStyle} />
        </li>
      </ul>
    </header>
  );
};

const barsStyle = {
  cursor: "pointer",
};

export default Header;
