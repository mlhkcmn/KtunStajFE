import React from 'react'
import { Grid } from '@mui/material'
import { FormInput, MultilineInput, MultilineInput1} from './common/Input'
import FileUpload from './common/FileUpload'

const StajKurumu = ({ formData, setFormData }) => {
    return (
        <>
            <Grid item xs={12}>
                <FormInput
                    type='text'
                    placeholder='Staj Yerinin Adı'
                    value={formData.corporationname}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationname: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <MultilineInput
                    rows='3'
                    type='text'
                    placeholder='Açık Adresi'
                    value={formData.corporationaddress}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationaddress: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={5.90}>
                <FormInput
                    type='text'
                    placeholder='Üretim/Hizmet Alanı'
                    value={formData.corporationproduction}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationproduction: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='number'
                    placeholder='Kurumda/İşletmede çalışan toplam personel sayısı'
                    value={formData.corporationworkercount}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationworkercount: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={5.85}>
                <FormInput
                    type='number'
                    placeholder='(Gerçek kişilik ise) TC no'
                    value={formData.corporationpersonalitytcno}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationpersonalitytcno: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <FormInput
                    type='email'
                    placeholder='Telefon numarası'
                    value={formData.corporationgsmno}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationgsmno: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <FormInput
                    type='number'
                    placeholder='Faks numarası'
                    value={formData.corporationfax}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationfax: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={7.87}>
                <FormInput
                    type='number'
                    placeholder='(Tüzel kişilik ise) Kurum/İşletme vergi numarası'
                    value={formData.corporationtaxno}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationtaxno: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={4}>
                <FormInput
                    type='number'
                    placeholder='Vergi dairesi'
                    value={formData.corporationtaxdepartment}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationtaxdepartment: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={5.85}>
                <MultilineInput1
                    rows='4'
                    type='number'
                    placeholder='Yetkilinin adı soyadı, görev ve unvanı'
                    value={formData.corporationauthorizedperson}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationauthorizedperson: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <FormInput
                    type='text'
                    placeholder='Web Adresi'
                    value={formData.corporationwebaddress}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationwebaddress: e.target.value });
                    }}
                />
                <br/>
                <br/>
                <FormInput
                    type='email'
                    placeholder='E-posta'
                    value={formData.corporationmail}
                    onChange={(e) => {
                        setFormData({ ...formData, corporationmail: e.target.value });
                    }}
                />
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4}>
                <FileUpload
                header="İş veren onayı (Kaşe/İmza/Tarih)"
                />
            </Grid>
            <Grid item xs={4}/>
        </>
    )
}

export default StajKurumu