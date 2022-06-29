import React from 'react'
import { Grid } from '@mui/material'
import { FormInput, MultilineInput, MultilineInput1} from './common/Input'
import FileUpload from './common/FileUpload'

const StajKurumu = ({ post, setPost }) => {
    return (
        <>
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
                <br/>
                <br/>
                <FormInput
                    type='email'
                    placeholder='E-posta'
                    value={post.corporationMail}
                    onChange={(e) => {
                        setPost({ ...post, corporationMail: e.target.value });
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