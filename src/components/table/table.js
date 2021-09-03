import React from "react";
import { useHistory } from "react-router-dom";

export const Table = ({data}) => {  
  const history = useHistory()

  const viewProfile = (profile) => {
    history.push( `/dashboard/profile/${profile._id}`, profile)
  }

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
          { !data ? (
            "No data found"
          ) : (
            <React.Fragment>
              {data?.map((items, id) => {
                return (
                  <div className="bodyRow" key={id}>
                    <div className="bodyTag nameTag">{items.fullName}</div>
                    <div className="bodyTag">{items.email}</div>
                    <div className="bodyTag">{items.phoneNumber}</div>
                    { items._id ? <div className="bodyTag statusTag" onClick={()=> viewProfile(items)}> View Profile </div> : "" }
                  </div>
                );
              })}
            </React.Fragment>
          )}
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
