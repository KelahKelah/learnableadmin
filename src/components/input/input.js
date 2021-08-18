import React from "react";
import "../input/input.css"
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";

const Input = () => {
  return (
    <div className="searchContainer">
      <div className="searchSection">
        <div className="searchIcon">
          <AiOutlineSearch />
        </div>
        <form className="row row-cols-lg-auto g-3 align-items-center">
          <div className="col-12 searchForm">
            <div className="input-group">
              <input
                type="text"
                className="form-control searchBar"
                id="inlineFormInputGroupUsername"
                placeholder="search for applicant"
              />
              <span className="input-group-text">
                <AiOutlineArrowRight className="searchRightArrow"/>
              </span>
            </div>
          </div>
        </form>
      </div>
      <button type="button" className="btn inputBtn dashboardHeaderBtn">
        log out
      </button>
    </div>
  );
};

export default Input;
