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
        field: 'studentDepartment',
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

    const getAllPosts = async () => {
        try {
            const res = await axios.get('https://localhost:7050/api/Posts');
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getPosts = async () => {
        setTableData(await getAllPosts())
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Navbar />
            <div style={{ height: '88vh', width: '100%' }}>
                {tableData.map(table => {
                    return (
                        <DataGrid

                            rows={tableData}
                            columns={columns}
                            pageSize={9}
                            rowsPerPageOptions={[5]}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Teacher