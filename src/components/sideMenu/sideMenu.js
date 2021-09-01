import React, { useState } from "react";
import "./sideMenu.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const sidebarList = [
    { id: 1, text: "dashboard", collapsed: "D", link: "/dashboard" },
    {
      id: 2,
      text: "view selected applicants",
      collapsed: "S",
      link: "/dashboard/selectedApplicants",
    },
    {
      id: 3,
      text: "view pending applicants",
      collapsed: "P",
      link: "/dashboard/pendingApplicants",
    },
    {
      id: 4,
      text: "view rejected applicants",
      collapsed: "R",
      link: "/dashboard/rejectedApplicants",
    },
  ];

  const [sidebarState, setSidebarState] = useState(true);

  return (
    <div className="sidemenuWrapper">
      <ul className="sidemenuList">
        {sidebarList.map((item, id) => {
          return (
            <NavLink to={item.link} activeClassName="selected" key={id}>
              <li className={sidebarState ? "sidemenuList li" : "closedState"}>
                {sidebarState ? item.text : item.collapsed}
              </li>{" "}
            </NavLink>
          );
        })}
      </ul>
      <span
        className="arrowSpan"
        onClick={() => setSidebarState(!sidebarState)}
      >
        {sidebarState ? (
          <IoIosArrowBack className="sidemenuBackArrow" />
        ) : (
          <IoIosArrowForward className="sidemenuBackArrow" />
        )}
      </span>
    </div>
  );
};
export { SideMenu };
