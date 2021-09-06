import React from 'react'
import { useQuery } from 'react-query'
import RequestProcessor from '../../api/requestProcessor'
import { Table } from '../table/table'

const fetchSelectedApplicants = () => {
    const res = RequestProcessor({
        method: "GET",
        url:"/admin/get/completedApplicants"
    })
    return res;
}

export const SelectedApplicantsTable = () => {
    const { data } = useQuery("selectedApplicants", fetchSelectedApplicants)
    console.log(data, "selectedApplicants")

    return (
        <div>
            <Table data={data} />
        </div>
    )
}
