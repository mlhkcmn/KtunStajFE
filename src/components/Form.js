import React, { useState } from "react";
import { Box, Grid, Typography } from '@mui/material'
import StudentInfo from "./StudentInfo";
import StajKurumu from "./StajKurumu";
import Signature from "./Signature";
import axios from "axios";

const Form = () => {
    const [page, setPage] = useState(0);
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

    const FormTitles = ["Öğrenci Bilgileri", "Staj Yapılacak Kurum/Kuruluşun Bilgileri:", "İmza"];

    const PageDisplay = () => {
        if (page === 0) {
            return <StudentInfo post={post} setPost={setPost} />;
        } else if (page === 1) {
            return <StajKurumu post={post} setPost={setPost} />;
        } else {
            return <Signature post={post} setPost={setPost} />;
        }
    };

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
            <Box sx={{ width: { xs: '95%', sm: '85%', md: '80%', lg: '60%' } }} className='FormCard'>
                <Grid container spacing={2} padding={2} direction='row'>
                    <Grid item xs={12} >
                        <div className="progressbar">
                            <div
                                style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className='FormHeader'>
                            {FormTitles[page]}
                        </Typography>
                    </Grid>
                    {PageDisplay()}
                    <Grid item xs={6}>
                        <button
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                            className='FormButton'>
                            Geri
                        </button>
                    </Grid>
                    <Grid item xs={6}>
                        <button
                            onClick={(e) => {
                                if (page === FormTitles.length - 1) {
                                    postSubmit(e)
                                    console.log(page);
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                            className='FormButton'>
                            {page === FormTitles.length - 1 ? "Tamamla" : "İleri"}
                        </button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Form