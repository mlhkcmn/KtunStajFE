import React from 'react'
import '../../App.css'
import {
    Grid,
    Box,
    OutlinedInput
} from '@mui/material'

const Information = (props) => {
    return (
        <>
            <Grid container direction={'row'} justifyContent={'center'}>
                <Grid xs="12" lg="7">
                    <Box className='infoBox'>
                        Resim
                    </Box>
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput placeholder='İsim' disabled className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Soyisim' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Öğrencino' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Bölüm' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Program' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='TC' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Telno' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Staj' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Staj Yerinin Adı' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Açık Adresi' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Hizmet Alanı' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='İşletmede Çalışan Sayısı' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='İş Sahibi Tc No' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='İş Sahibi Tel No' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Faks No' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6" >
                    <OutlinedInput disabled placeholder='Vergi  Numarası' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Vergi Dairesi' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Yetkilin Adı' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Web Sitesi' className='inputText' />
                </Grid>
                <Grid xs="6" lg="6">
                    <OutlinedInput disabled placeholder='Eposta' className='inputText' />
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