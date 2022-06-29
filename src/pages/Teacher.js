import { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar'
import { DataGrid } from '@mui/x-data-grid';
import ModalButton from '../components/ModalButton';

const columns = [

    { field: 'id', headerName: 'ID', width: 90 },

    {
        field: 'studentName',
        headerName: 'Tam İsim',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
    },
    {
        field: 'studentNo',
        headerName: 'Öğrenci No',
        type: 'int',
        width: 150,
        editable: false,
    },
    {
        field: 'studentClass',
        headerName: 'Bölümü',
        type: 'text',
        width: 280,
        editable: false,
    },
    {
        field: 'internshipSelection',
        headerName: 'Staj Türü',
        type: 'text',
        width: 200,
        editable: false,
    },
    {
        
        field: 'view',
        headerName: 'Görüntüle',
        width: 200,
        renderCell: () => (
            <>
               <ModalButton
                header="Danışman Onayı"
               />
            </>
        )
    },
];

const Teacher = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7050/api/Posts")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })

    return (
        <>
            <Navbar />
            <div style={{ height: '88vh', width: '100%' }}>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </>
    )
}

export default Teacher