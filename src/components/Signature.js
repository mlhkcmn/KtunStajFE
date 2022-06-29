import { Grid } from '@mui/material'
import React from 'react'
import FileUpload from './common/FileUpload'

const Signature = () => {
    return (
        <>
            <Grid item xs={4} marginBottom={3} />
            <Grid item xs={4} marginBottom={3}>
                <FileUpload
                    header="Öğrenci İmzası"
                    text="Belgede ki bilgilerin doğru olduğunu bildiririm."
                />
            </Grid>
            <Grid item xs={4} marginBottom={3} />
        </>
    )
}

export default Signature