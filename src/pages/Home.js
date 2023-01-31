import React, { useState } from "react";
import { Box, Grid, Typography } from '@mui/material'
import axios from "axios";
import { FormInput, MultilineInput, MultilineInput1 } from "../components/common/Input";
import FileUpload from "../components/common/FileUpload";

const Home = () => {
    const [post, setPost] = useState({
        studentName: "",
        studentSurname: "",
        studentNo: "",
        studentDepartment: "",
        studentClass: "",
        studentTcNo: "",
        studentMail: "",
        studentGsmNo: "",
        internshipSelection: "",
        corporationName: "",
        corporationAddress: "",
        corporationProduction: "",
        corporationWorkerCount: "",
        corporationPersonalityTcNo: "",
        corporationGsmNo: "",
        corporationFax: "",
        corporationTaxNo: "",
        corporationDepartment: "",
        corporationAuthorizedPerson: "",
        corporationWebAddress: "",
        corporationMail: "",
        corporationShef: "",
    });
    const postSubmit = async (e) => {
        try {
            await axios.post('https://localhost:7050/api/Posts', { ...post, userName: localStorage.getItem('userName'), userId: localStorage.getItem('userId') })

            window.location.href = "/";
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="App">
            <img alt="..." src={require('../images/ktun-logo.png')} />
            <Box sx={{ width: { xs: '95%' } }} className='FormCard'>
                <Grid container spacing={2} padding={2} sx={{ justifyContent: 'center' }}>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '25px' }}>
                            Öğrenci Bilgileri
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <center>
                        <Grid item xs={6}>
                            <FileUpload
                                header="Öğrenci Fotoğrafı"
                            />
                        </Grid>
                        </center>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormInput
                            type='text'
                            placeholder='İsim'
                            value={post.studentName}
                            onChange={(e) => {
                                setPost({ ...post, studentName: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormInput
                            type='number'
                            placeholder='Öğrenci No'
                            value={post.studentNo}
                            onChange={(e) => {
                                setPost({ ...post, studentNo: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormInput
                            type='text'
                            placeholder='Bölüm Adı'
                            value={post.studentDepartment}
                            onChange={(e) => {
                                setPost({ ...post, studentDepartment: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormInput
                            type='text'
                            placeholder='Program/Sınıf'
                            value={post.studentClass}
                            onChange={(e) => {
                                setPost({ ...post, studentClass: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormInput
                            type='number'
                            placeholder='T.C Kimlik No:'
                            value={post.studentTcNo}
                            onChange={(e) => {
                                setPost({ ...post, studentTcNo: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormInput
                            type='email'
                            placeholder='E-posta'
                            value={post.studentMail}
                            onChange={(e) => {
                                setPost({ ...post, studentMail: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormInput
                            type='number'
                            placeholder='Telefon No:'
                            value={post.studentGsmNo}
                            onChange={(e) => {
                                setPost({ ...post, studentGsmNo: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <center>
                            <fieldset className="signupModalRadio">
                                <input
                                    type="radio"
                                    id="staj1"
                                    name="staj"
                                    value="Staj1"
                                />
                                <label htmlFor="staj1">Staj 1</label>
                                <br />
                                <input
                                    type="radio"
                                    id="staj2"
                                    name="staj"
                                    value="Staj2"
                                />
                                <label htmlFor="staj2">Staj 2</label>
                            </fieldset>
                        </center>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '25px' }}>
                            Staj Bilgileri
                        </Typography>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <Grid item xs={12}>
                        <FormInput
                            type='text'
                            placeholder='Staj Yerinin Adı'
                            value={post.corporationname}
                            onChange={(e) => {
                                setPost({ ...post, corporationName: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MultilineInput
                            rows='3'
                            type='text'
                            placeholder='Açık Adresi'
                            value={post.corporationAddress}
                            onChange={(e) => {
                                setPost({ ...post, corporationAddress: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={5.90}>
                        <FormInput
                            type='text'
                            placeholder='Üretim/Hizmet Alanı'
                            value={post.corporationProduction}
                            onChange={(e) => {
                                setPost({ ...post, corporationProduction: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormInput
                            type='number'
                            placeholder='Kurumda/İşletmede çalışan toplam personel sayısı'
                            value={post.corporationWorkerCount}
                            onChange={(e) => {
                                setPost({ ...post, corporationWorkerCount: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={5.85}>
                        <FormInput
                            type='number'
                            placeholder='(Gerçek kişilik ise) TC no'
                            value={post.corporationPersonalityTcNo}
                            onChange={(e) => {
                                setPost({ ...post, corporationPersonalityTcNo: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormInput
                            type='email'
                            placeholder='Telefon numarası'
                            value={post.corporationGsmNo}
                            onChange={(e) => {
                                setPost({ ...post, corporationGsmNo: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormInput
                            type='number'
                            placeholder='Faks numarası'
                            value={post.corporationFax}
                            onChange={(e) => {
                                setPost({ ...post, corporationFax: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={7.87}>
                        <FormInput
                            type='number'
                            placeholder='(Tüzel kişilik ise) Kurum/İşletme vergi numarası'
                            value={post.corporationTaxNo}
                            onChange={(e) => {
                                setPost({ ...post, corporationTaxNo: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormInput
                            type='number'
                            placeholder='Vergi dairesi'
                            value={post.corporationDepartment}
                            onChange={(e) => {
                                setPost({ ...post, corporationDepartment: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={5.85}>
                        <MultilineInput1
                            rows='4'
                            type='number'
                            placeholder='Yetkilinin adı soyadı, görev ve unvanı'
                            value={post.corporationauthorizedperson}
                            onChange={(e) => {
                                setPost({ ...post, corporationAuthorizedPerson: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormInput
                            type='text'
                            placeholder='Web Adresi'
                            value={post.corporationWebAddress}
                            onChange={(e) => {
                                setPost({ ...post, corporationWebAddress: e.target.value });
                            }}
                        />
                        <br />
                        <br />
                        <FormInput
                            type='email'
                            placeholder='E-posta'
                            value={post.corporationMail}
                            onChange={(e) => {
                                setPost({ ...post, corporationMail: e.target.value });
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={4}>
                        <FileUpload
                            header="İş veren onayı (Kaşe/İmza/Tarih)"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FileUpload
                            header="Öğrenci İmzası"
                            text="Belgede ki bilgilerin doğru olduğunu bildiririm."
                        />
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <Grid item xs={6}>
                    <button onClick={(e) => { postSubmit(e) }} className='FormButton'>
                        Tamamla
                    </button>
                </Grid>
            </Box>
        </div>
    )
}

export default Home