import { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import {
    Grid,
    Box,
    OutlinedInput,
    Typography,
    InputLabel
} from '@mui/material'

const Information = (props) => {
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
            {tableData.map(table => {
                return (
                    <Grid container direction={'row'} justifyContent={'center'}>
                        <Grid xs="12" lg="7">
                            <Box className='infoBox'>
                                Resim
                            </Box>
                        </Grid>
                        <Grid xs="12" >
                            <InputLabel>İsim-Soyisim</InputLabel>
                            <OutlinedInput placeholder='İsim' value={table.studentName} disabled className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6" >
                            <InputLabel>Öğrenci No</InputLabel>
                            <OutlinedInput disabled placeholder='Öğrencino' value={table.studentNo} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Öğrencinin Bölümü</InputLabel>
                            <OutlinedInput disabled placeholder='Bölüm' value={table.studentDepartment} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6" >
                            <InputLabel>Öğrenci Programı</InputLabel>
                            <OutlinedInput disabled placeholder='Program' value={table.studentClass} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Öğrenci Tc No</InputLabel>
                            <OutlinedInput disabled placeholder='TC' value={table.studentTcNo} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Öğrenci Telefon Numarası</InputLabel>
                            <OutlinedInput disabled placeholder='Telno' value={table.studentGsmNo} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6" >
                            <InputLabel>Staj Seçimi</InputLabel>
                            <OutlinedInput disabled placeholder='Staj' value={table.internshipSelection} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Staj Yerinin Adı</InputLabel>
                            <OutlinedInput disabled placeholder='Staj Yerinin Adı' value={table.corporationName} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6" >
                            <InputLabel>Staj Yerinin Adresi</InputLabel>
                            <OutlinedInput disabled placeholder='Açık Adresi' value={table.corporationAddress} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Hizmet Alanı</InputLabel>
                            <OutlinedInput disabled placeholder='Hizmet Alanı' value={table.corporationProduction} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6" >
                            <InputLabel>Çalışan Sayısı</InputLabel>
                            <OutlinedInput disabled placeholder='İşletmede Çalışan Sayısı' value={table.corporationWorkerCount} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>İş Veren Tc No</InputLabel>
                            <OutlinedInput disabled placeholder='İş Sahibi Tc No' value={table.corporationPersonalityTcNo} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6" >
                            <InputLabel>İş Veren Tel No</InputLabel>
                            <OutlinedInput disabled placeholder='İş Sahibi Tel No' value={table.corporationGsmNo} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Faks No</InputLabel>
                            <OutlinedInput disabled placeholder='Faks No' value={table.corporationFax} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6" >
                            <InputLabel>Vergi Numarası</InputLabel>
                            <OutlinedInput disabled placeholder='Vergi Numarası' value={table.corporationTaxNo} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Vergi Dairesi</InputLabel>
                            <OutlinedInput disabled placeholder='Vergi Dairesi' value={table.corporationDepartment} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Yetkilinin Adı</InputLabel>
                            <OutlinedInput disabled placeholder='Yetkilin Adı' value={table.corporationAuthorizedPerson} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>Web Adresi</InputLabel>
                            <OutlinedInput disabled placeholder='Web Sitesi' value={table.corporationWebAddress} className='inputText' />
                        </Grid>
                        <Grid xs="6" lg="6">
                            <InputLabel>İşyeri Maili</InputLabel>
                            <OutlinedInput disabled placeholder='Eposta' value={table.corporationMail} className='inputText' />
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
                )
            })}
        </>
    )
}

export default Information