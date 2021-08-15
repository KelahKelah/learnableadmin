import React from "react";
import { NavLink } from "react-router-dom";

export const Table = () => {
    const tableData = [
      {
        id: 1,
        name: "Ohalewe chiemezie richmond",
        email: "ohalewechiemezie@richmond.com",
        phone: "1234567890",
        staus: "view profile",
        link: "/profile"
      },
      {
        id: 2,
        name: "Stephanie Nnoli",
        email: "stephanie@richmond.com",
        phone: "1234567890",
        staus: "view profile",
        link: "/profile"
      },
      {
        id: 3,
        name: "Groovy Khela",
        email: "groovy@richmond.com",
        phone: "1234567890",
        staus: "view profile",
        link: "/profile"
      },
      {
        id: 4,
        name: "Nancy Ryke",
        email: "nancyryke@richmond.com",
        phone: "1234567890",
        staus: "view profile",
        link: "/profile"
      },
      {
        id: 5,
        name: "The Very Best",
        email: "verybest@richmond.com",
        phone: "1234567890",
        staus: "view profile",
        link: "/profile"
      },
      {
        id: 6,
        name: "Victor Somebody",
        email: "victorsomebody@richmond.com",
        phone: "1234567890",
        staus: "view profile",
        link: "/profile"
      },
    ];
  return (
    <div>
      <div className="dashboardTable">
        <div className="tableHead">
          <div className="headTitle">name</div>
          <div className="headTitle">email</div>
          <div className="headTitle">phone number</div>
          <div className="headTitle">status</div>
        </div>
        <div className="tableBody">
          {tableData.map((data, id) => {
            return (
              <div className="bodyRow" key={id}>
                <div className="bodyTag nameTag">{data.name}</div>
                <div className="bodyTag">{data.email}</div>
                <div className="bodyTag">{data.phone}</div>
                <div className="bodyTag statusTag"> <NavLink to={data.link}> {data.staus} </NavLink> </div>
              </div>
            );
          })}
        </div>
        <div className="dashboardTableFooter">
          <div className="col">
            <span className="badge bg-light text-dark dashboardTableBadge">
              1{" "}
            </span>{" "}
            of 20{" "}
            <button
              type="button"
              className="btn btn-outline-primary dashboardTableBtn"
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
