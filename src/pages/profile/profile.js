import React from "react";
import { useQuery } from "react-query";
import { useLocation, useHistory } from "react-router-dom";
import RequestProcessor from "../../api/requestProcessor";
import "./profile.css";

// /admin/accept/{id}


export const Profile = () => {
  const { state } = useLocation();
  const history = useHistory()
  
  const returnToDashboard = () => {
    history.push("/dashboard")
  }
  
  let applicantProfile = history.location.state._id;
  // console.log(history.location.state._id, "profile")
  
  const handleAccept = () =>{
    const res = RequestProcessor({
      method: "GET",
      url: `/admin/accept/${applicantProfile}`
    })
    return res;
  }
  
  const { data } = useQuery("accept", handleAccept)
  console.log(data, "profile")
  
  return (
    <div className="profileContainer">
      <div className="profileHeader">
        <div className="profileBackBtn">
          <button
            type="button"
            className="btn btn-outline-primary inputBtn profileHeaderBtn" 
            onClick={returnToDashboard}
          >
            back
          </button>
        </div>
        <div className="profileStatusOptions">
          <button
            type="button"
            className="btn btn-success profileHeaderBtn" 
            onClick= {handleAccept}
          >
            accept
          </button>
          <button
            type="button"
            className="btn btn-danger profileHeaderBtn"
          >
            reject
          </button>
        </div>
      </div>
        <div className="candidateInfo">
          <div className="candidateName">
            <span>{state.fullName}</span>
            <div className="internshipMode">
              internship mode: <span className="physical">physical</span>{" "}
            </div>
          </div>
          <div className="candidatePersonalData">
            <div className="candidateData">
              phone number: {state.phoneNumber}
            </div>
            <div className="candidateData">{state.sex}</div>
            <div className="candidateData">{state.address}</div>
            <div className="candidateData">{state.dateOfBirth}</div>
          </div>
        </div>
      <div className="candidateOptions">
        <button
          type="button"
          className="btn btn-warning profileOptionBtn"
        >
          Application status
        </button>
        <button
          type="button"
          className="btn btn-secondary profileOptionBtn"
        >
          Phone interview
        </button>
        <button
          type="button"
          className="btn btn-secondary profileOptionBtn"
        >
          physical interview
        </button>
      </div>
      <div className="candidateWorkExperience">
        <div className="workHistory">
          <div className="historyInput">
            learning path:{" "}
            <span className="inputWeight">front end developement</span>{" "}
          </div>
          <div className="historyInput">
            previous worklink:{" "}
            <span className="inputWeight">
              www.beehance.net/chiemezieohalewe
            </span>{" "}
          </div>
          <div className="historyInput">
            educational status: <span className="inputWeight">graduate</span>{" "}
          </div>
          <div className="historyInput">
            institution:{" "}
            <span className="inputWeight">
              federal university of technology, owerri
            </span>{" "}
          </div>
        </div>
        <div className="graduateStatus">
          <div className="historyInput">
            have you done NYSC? <span className="inputWeight">yes</span>
          </div>
          <div className="historyInput">
            year of POP? <span className="inputWeight">2020</span>
          </div>
          <div className="historyInput">
            where are you serving (if currently)?{" "}
            <span className="inputWeight">tenece</span>
          </div>
        </div>
      </div>
      <div className="personalSummary">
        <div className="questionDiv">
          <div className="summaryDiv">
            <div className="question">
              Question:{" "}
              <span className="interviewQuestion">
                A truck driver is going down a one way street the wrong way, and
                passes at least ten cops. Why is he not caught ?
              </span>{" "}
            </div>
            <div className="response">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget morbi odio mattis etiam purus quis. Vulputate eu semper
              posuere.
            </div>
          </div>
          <div className="summaryDiv">
            <div className="question">What is your greatest achievement?</div>
            <div className="response">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget morbi odio mattis etiam purus quis. Vulputate eu semper
              posuere.
            </div>
          </div>
          <div className="summaryDiv">
            <div className="question">What is your greatest achievement?</div>
            <div className="response">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget morbi odio mattis etiam purus quis. Vulputate eu semper
              posuere.
            </div>
          </div>
        </div>
        <div className="questionDiv">
          <div className="summaryDiv">
            <div className="question">What is your greatest achievement?</div>
            <div className="response">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget morbi odio mattis etiam purus quis. Vulputate eu semper
              posuere.
            </div>
          </div>
          <div className="linksDiv">
            <div className="workLink">
              LinkedIn:{" "}
              <span className="linkedDiv">www.linkedin.com/richmondO</span>
            </div>
            <div className="workLink">
              Facebook:{" "}
              <span className="linkedDiv">www.facebook.com/richmondO</span>
            </div>
            <div className="instaTwitter">
              <div className="workLink">
                Instagram: <span className="linkedDiv">@richmondO</span>
              </div>
              <div className="workLink">
                Twitter: <span className="linkedDiv">@richmondO</span>
              </div>
            </div>
            <div className="availabilityDiv">
              <div className="availabilityQuestion">
                Would you be available for 6 months between May-October, 2020?{" "}
                <span className="linkedDiv">Yes</span>
              </div>
              <div className="availabilityQuestion">
                Do you have adequate accomodation in Enugu?{" "}
                <span className="linkedDiv">Yes</span>
              </div>
              <div className="availabilityQuestion">
                How did you hear about the internship?{" "}
                <span className="linkedDiv">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
