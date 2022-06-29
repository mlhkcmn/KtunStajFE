import { useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar'
import { DataGrid } from '@mui/x-data-grid';
import ModalButton from '../components/ModalButton';
import '../App.css'

function getFullName(params) {
    return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

const columns = [

    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'İsim',
        width: 180,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Soyisim',
        width: 150,
        editable: false,
    },
    {
        field: 'fullName',
        headerName: 'Tam İsim',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: getFullName,
    },
    {
        field: 'no',
        headerName: 'Öğrenci No',
        type: 'int',
        width: 150,
        editable: false,
    },
    {
        field: 'class',
        headerName: 'Bölümü',
        type: 'text',
        width: 280,
        editable: false,
    },
    {
        field: 'staj',
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
                header="Yüksek Okul Onayı"
               />
            </>
        )
    },
];
const rows = [
    { id: 1, firstName: 'Zübeyir', lastName: 'Caymaz', no: 205035024, class: 'Bilgisayar Programcılığı', staj: 'Staj 1' },
    { id: 2, firstName: 'Ertuğrul', lastName: 'Göçer', no: 205035024, class: 'Bilgisayar Programcılığı', staj: 'Staj 2' },
    { id: 3, firstName: 'Gürbüz Melih', lastName: 'Kocaman', no: 205035024, class: 'Bilgisayar Programcılığı', staj: 'Staj 1' },
    { id: 4, firstName: 'Enver', lastName: 'Uludoğan', no: 205035024, class: 'Bilgisayar Programcılığı', staj: 'Staj 1' },
    { id: 5, firstName: 'Ekrem', lastName: 'Kesik', no: 205035024, class: 'Bilgisayar Programcılığı', staj: 'Staj 1' },
    { id: 6, firstName: 'Buğra', lastName: 'Arı', no: 205035024, class: 'Bilgisayar Programcılığı', staj: 'Staj 1' },
    { id: 7, firstName: 'Mustafa Berkay', lastName: 'Ertan', no: 205035024, class: 'Bilgisayar Programcılığı', staj: 'Staj 1' },
];

const School = () => {
    // const [posts, setPosts] = useState();

    // axios.get('https://localhost:7050/api/posts').then(res => {
    //     setPosts(res.data);
    // });


    return (
        <>
            <Navbar />
            <div style={{ height: '88vh', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </>
    )
}

export default School