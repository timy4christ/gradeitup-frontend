import "./SideNabar.css";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";

export function SideNav() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SideBarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : " "}
            >
              <Link className="SidebarList row" to={val.link}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
