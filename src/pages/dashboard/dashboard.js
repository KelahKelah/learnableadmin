import React, { useState, useEffect } from "react";
import "../dashboard/dashboard.css";
import Input from "../../components/input/input";
import { DashboardTable } from "../../components/dashboardTable/dashboardTable";
import { useQuery } from "react-query";
import RequestProcessor from "../../api/requestProcessor";
import { Card } from "../../components/card/card";

function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

const fetchApplicantCount = (url) => {
  const res = RequestProcessor({
    method: "GET",
    url: url,
  });
  return res;
};

const Dashboard = () => {
  const [dashboardSearch, setDashboardSearch] = useState("");
  const debouncedSearch = useDebounce(dashboardSearch, 600);

  const { data: all } = useQuery("allApplicantCount", () =>
    fetchApplicantCount("/get/allApplicants")
  );
  const { data: phone } = useQuery("phoneApplicantCount", () =>
    fetchApplicantCount("/admin/get/phoneInterview")
  );
  const { data: physical } = useQuery("physicalApplicantCount", () =>
    fetchApplicantCount("/admin/get/physicalInterview")
  );
  const { data: selected } = useQuery("selectedApplicantCount", () =>
    fetchApplicantCount("/admin/get/selectedApplicants")
  );
  const { data: pending } = useQuery("pendingApplicantCount", () =>
    fetchApplicantCount("/admin/get/pendingApplicants")
  );

  const allApplicants = all?.result?.data.pager.totalItems;
  const phoneApplicantCount = phone?.result?.data.count;
  const physicalApplicantsCount = physical?.result?.data.count;
  const selectedApplicantsCount = selected?.result?.data.count ?? 0;
  const pendingApplicantsCount = pending?.result?.data.count;

  // const handleDashboardSearch = (e) => {
  //   e.preventDefault();
  //   setDashboardSearch(e.target.value);
  //   const searchOption = RequestProcessor({
  //     method: "GET",
  //     url: `/admin/search/${dashboardSearch}`,
  //   });
  //   return searchOption;
  // };

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setDashboardSearch(e.target.value);
  };

  const { isFetching, data } = useQuery(
    ["repoData", debouncedSearch],
    async () => {
      const result = await fetch(
        `https://damp-plateau-96490.herokuapp.com/admin/search/${debouncedSearch}`
      );

      const json = await result.json();

      return json;
    },
    { enabled: debouncedSearch.length > 0 }
  );

  // if (data) {
  //   setSearchData(data)
  // }

  // const { data } = useQuery("searchData", handleDashboardSearch);

  // console.log(data)

  return (
    <div className="dashboardContainer">
      <div className="inputDiv">
        <Input value={dashboardSearch} onChange={handleSearchChange} />
      </div>
      <div className="cardReelsContainer">
        <Card data={allApplicants} title="Total Number of Applicants" />
        <Card
          data={phoneApplicantCount}
          title="Total Number for Phone Interview"
        />
        <Card
          data={physicalApplicantsCount}
          title="Total number for Physical Interview"
        />
        <Card
          data={selectedApplicantsCount}
          title="Total number of Selected Applicant"
        />
        <Card
          data={pendingApplicantsCount}
          title="Total number of pending Applicant"
        />
      </div>
      <div className="informationDiv">
        <DashboardTable
          searchData={data?.message || []}
          showSearchData={debouncedSearch.length}
        />
      </div>
    </div>
  );
};
export { Dashboard };
