import { useState , useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import {
    Grid,
    Box,
    OutlinedInput
} from '@mui/material'

const Information = (props) => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7050/api/Posts/1")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })

    return (
        <>
            <Grid container direction={'row'} justifyContent={'center'}>
                <Grid xs="12" lg="7">
                    <Box className='infoBox'>
                        Resim
                    </Box>
                </Grid>
                <Grid xs="12" >
                    <OutlinedInput placeholder='İsim' value={tableData.studentName} disabled className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Öğrencino' value={tableData.studentNo}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Bölüm' value={tableData.studentDepartment}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Program' value={tableData.studentClass}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='TC' value={tableData.studentTcNo}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Telno' value={tableData.studentGsmNo}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Staj' value={tableData.internshipSelection}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Staj Yerinin Adı' value={tableData.corporationName}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Açık Adresi' value={tableData.corporationAddress}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Hizmet Alanı' value={tableData.corporationProduction}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='İşletmede Çalışan Sayısı' value={tableData.corporationWorkerCount}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='İş Sahibi Tc No' value={tableData.corporationPersonalityTcNo}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='İş Sahibi Tel No' value={tableData.corporationGsmNo} className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Faks No' value={tableData.corporationFax} className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Vergi  Numarası' value={tableData.corporationTaxNo}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Vergi Dairesi' value={tableData.corporationDepartment}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Yetkilin Adı' value={tableData.corporationAuthorizedPerson}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Web Sitesi' value={tableData.corporationWebAddress}  className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Eposta' value={tableData.corporationMail}  className='inputText' />
                </Grid>
                <Grid xs="12" lg="6">
                    <Box className='infoBox'>
                        Resim
                    </Box>
                </Grid>
                <Grid xs="12" lg="6">
                    <Box className='infoBox'>
                        Resim
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Information