import React from "react";
import "../dashboard/dashboard.css";
import Input from "../../components/input/input";
import { DashboardTable } from "../../components/dashboardTable/dashboardTable";
// import { useQuery } from "react-query";
// import RequestProcessor from "../../api/requestProcessor";

// const fetchApplicants = () => {
//   const res = RequestProcessor ({
//     method: "GET",
//     url: "/get/allApplicants"
//   })
//   return res
// }

const Dashboard = () => {
  // const { data } = useQuery("applicantNumber", fetchApplicants)
  // console.log(data)
  
  const cardsGroup = [
    { id: 1, text: "Total number of applicants", count: "20" },
    { id: 2, text: "Total number for phone interviews", count: "5" },
    { id: 3, text: "Total number for physical interviews", count: "6" },
    { id: 4, text: "Total number of selected applicants", count: "8" },
    { id: 5, text: "Total number of rejected applicants", count: "3" },
    { id: 6, text: "Total number of fat applicants", count: "8" },
  ];


  return (
    <div className="dashboardContainer">
      <Input />
      <div className="cardReelsContainer">
        {cardsGroup.map((card, id) => {
          return (
            <div
              key={id}
              className="d-flex flex-column align-items-center reelsCard"
            >
              <p>{card.text}</p>
              <div className="reelsCount">{card.count}</div>
            </div>
          );
        })}
      </div>
      <div className="informationDiv">
        <DashboardTable />
      </div>
    </div>
  );
};
export { Dashboard };
