import React from 'react'
import { Grid } from '@mui/material'
import { FormInput } from './common/Input'
import FileUpload from './common/FileUpload'

const StudentInfo = ({ formData, setFormData }) => {
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <center>
                    <FileUpload
                        header="Öğrenci Fotoğrafı"
                    />
                </center>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='text'
                    placeholder='İsim'
                    value={formData.studentname}
                    onChange={(e) => {
                        setFormData({ ...formData, studentname: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='text'
                    placeholder='Soyisim'
                    value={formData.studentsurname}
                    onChange={(e) => {
                        setFormData({ ...formData, studentsurname: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='number'
                    placeholder='Öğrenci No'
                    value={formData.studentno}
                    onChange={(e) => {
                        setFormData({ ...formData, studentno: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='text'
                    placeholder='Bölüm Adı'
                    value={formData.studentdepartment}
                    onChange={(e) => {
                        setFormData({ ...formData, studentdepartment: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='text'
                    placeholder='Program/Sınıf'
                    value={formData.studentclass}
                    onChange={(e) => {
                        setFormData({ ...formData, studentclass: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='number'
                    placeholder='T.C Kimlik No:'
                    value={formData.studenttcno}
                    onChange={(e) => {
                        setFormData({ ...formData, studenttcno: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='email'
                    placeholder='E-posta'
                    value={formData.studentmail}
                    onChange={(e) => {
                        setFormData({ ...formData, studentmail: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormInput
                    type='number'
                    placeholder='Telefon No:'
                    value={formData.studentgsmno}
                    onChange={(e) => {
                        setFormData({ ...formData, studentgsmno: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <center>
                    <fieldset className="signupModalRadio">
                        <input
                            type="radio"
                            id="staj1"
                            name="staj"
                            value="Staj1"
                            onChange={handleChange}
                        />
                        <label htmlFor="staj1">Staj 1</label>
                        <br />
                        <input
                            type="radio"
                            id="staj2"
                            name="staj"
                            value="Staj2"
                            onChange={handleChange}
                        />
                        <label htmlFor="staj2">Staj 2</label>
                    </fieldset>
                </center>
            </Grid>
        </>
    )
}

export default StudentInfo