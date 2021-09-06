import React from "react";
import Input from "../../components/input/input";
import { Table } from "../../components/table/table";
import "./pendingApplicants.css";

export const PendingApplicants = () => {
  return (
    <div className="pendingApplicantsContainer">
      <Input />
      <div className="cardContainer">
        <div className="d-flex flex-column align-items-center reelsCard">
          <p>Total number of applicants</p>
          <div className="reelsCount">20</div>
        </div>
      </div>
      <Table />
    </div>
  );
};
