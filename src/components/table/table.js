import React from "react";
// import { NavLink } from "react-router-dom";
import RequestProcessor from "../../api/requestProcessor";
import { useQuery } from "react-query";

const fetchApplicants = () => {
  const res = RequestProcessor({
    method: "GET",
    url: "/admin/search/Test",
  })
  return res
};

export const Table = () => {
  
  const { data } = useQuery("dashboard", fetchApplicants);
  console.log(data?.result?.data)
  let tableEntry = data?.result?.data;

    // const tableData = [
    //   {
    //     id: 1,
    //     name: "Ohalewe chiemezie richmond",
    //     email: "ohalewechiemezie@richmond.com",
    //     phone: "1234567890",
    //     staus: "view profile",
    //     link: "/dashboard/profile"
    //   },
    //   {
    //     id: 2,
    //     name: "Stephanie Nnoli",
    //     email: "stephanie@richmond.com",
    //     phone: "1234567890",
    //     staus: "view profile",
    //     link: "/dashboard/profile"
    //   },
    //   {
    //     id: 3,
    //     name: "Groovy Khela",
    //     email: "groovy@richmond.com",
    //     phone: "1234567890",
    //     staus: "view profile",
    //     link: "/dashboard/profile"
    //   },
    //   {
    //     id: 4,
    //     name: "Nancy Ryke",
    //     email: "nancyryke@richmond.com",
    //     phone: "1234567890",
    //     staus: "view profile",
    //     link: "/dashboard/profile"
    //   },
    //   {
    //     id: 5,
    //     name: "The Very Best",
    //     email: "verybest@richmond.com",
    //     phone: "1234567890",
    //     staus: "view profile",
    //     link: "/dashboard/profile"
    //   },
    //   {
    //     id: 6,
    //     name: "Victor Somebody",
    //     email: "victorsomebody@richmond.com",
    //     phone: "1234567890",
    //     staus: "view profile",
    //     link: "/dashboard/profile"
    //   },
    // ];
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
          {tableEntry?.map((data, id) => {
            return (
              <div className="bodyRow" key={id}>
                <div className="bodyTag nameTag">{data.fullName}</div>
                <div className="bodyTag">{data.email}</div>
                <div className="bodyTag">{data.phoneNumber}</div>
                {/* <div className="bodyTag statusTag"> <NavLink to={data.link}> {data.staus} </NavLink> </div> */}
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
