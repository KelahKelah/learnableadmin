import React from "react";
import "../rejectedApplicants/rejectedApplicants.css";
import Input from "../../components/input/input";
import { Table } from "../../components/table/table";

export const RejectedApplicants = () => {
  return (
    <div className="rejectedContainer">
      <Input />
      <div className="cardContainer">
        <div className="d-flex flex-column align-items-center reelsCard">
          <p>Total number of applicants</p>
          <div className="reelsCount">20</div>
        </div>
      </div>
      <div className="informationDiv">
        <Table />
      </div>
    </div>
  );
};
