import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import RequestProcessor from '../../api/requestProcessor'
import { Table } from '../table/table'

const fetchAllApplicants = () => {
    const res = RequestProcessor({
        method:"GET",
        url:"/get/allApplicants"
    })
    return res
}

export const DashboardTable = ({searchData, showSearchData}) => {
    
    const [tableData, setTableData] = useState([])

    const {data} = useQuery("allApplicants", fetchAllApplicants)
    // let tableEntry = data?.result.data.message.map((data) => ({...data, link: data._id}));
    let tableEntry = data?.result.data.applicants;
    console.log(data)


    useEffect(() => {
        setTableData(tableEntry)
        // console.log(searchData, 'SEARCH')
    }, [tableEntry])

    const filteredData = showSearchData ? searchData : tableData;
    
    return (
        <div>
            <Table data={filteredData} />
        </div>
    )
}
