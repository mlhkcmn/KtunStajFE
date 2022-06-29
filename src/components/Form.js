import React, { useState } from "react";
import { Box, Grid, Link, Typography } from '@mui/material'
import StudentInfo from "./StudentInfo";
import StajKurumu from "./StajKurumu";
import Signature from "./Signature";

const Form = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        studentname: "",
        studentsurname: "",
        studentno: "",
        studentdepartment: "",
        studentclass: "",
        studenttcno: "",
        studentmail: "",
        studentgsmno: "",
        staj: "",
        corporationname: "",
        corporationaddress: "",
        corporationproduction: "",
        corporationworkercount: "",
        corporationpersonalitytcno: "",
        corporationgsmno: "",
        corporationfax: "",
        corporationtaxno: "",
        corporationtaxdepartment: "",
        corporationauthorizedperson: "",
        corporationwebaddress: "",
        corporationmail: "",
        corporationshef: "",
    });

    const FormTitles = ["Öğrenci Bilgileri", "Staj Yapılacak Kurum/Kuruluşun Bilgileri:", "İmza"];

    const PageDisplay = () => {
        if (page === 0) {
            return <StudentInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <StajKurumu formData={formData} setFormData={setFormData} />;
        } else {
            return <Signature formData={formData} setFormData={setFormData} />;
        }
    };
    return (
        <div className="App">
            <Link href={'/teacher'}>
                <img alt="..." src={require('../images/ktun-logo.png')} />
            </Link>
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
                            onClick={() => {
                                if (page === FormTitles.length - 1) {
                                    alert("Form Yollandı");
                                    console.log(formData);
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