import React from 'react'
import { useQuery } from 'react-query'
import RequestProcessor from '../../api/requestProcessor'
import { Table } from '../table/table'

const fetchAllApplicants = () => {
    const res = RequestProcessor({
        method:"GET",
        url:"/admin/search/Test"
    })
    return res
}

export const DashboardTable = () => {
    const {data} = useQuery("allApplicants", fetchAllApplicants)
    let tableEntry = data?.result.data.message.map((data) => ({...data, link: data._id}));
    console.log(tableEntry)
    
    return (
        <div>
            <Table data={tableEntry} />
        </div>
    )
}
