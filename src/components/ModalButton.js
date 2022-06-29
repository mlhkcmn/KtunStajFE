import React from 'react'
import { Button, Typography, Modal, Box, IconButton, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import FileUpload from './common/FileUpload';

const style = {
    maxWidth: '660px',
    minHeight: '583px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};
const styles = {
    paddingTop: '8%',
    overflowX: 'hidden',
    paddingBottom: '8%'
};

const ModalButton = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button onClick={handleOpen} className='submissionTableViewButton'>
                <Typography className='submissionTableViewButtonText' >
                    Görüntüle
                </Typography>
            </Button>
            <Modal open={open} onClose={handleClose} sx={styles} className='blogmodal'>
                <center>
                    <Box sx={{ ...style, }}>
                        <IconButton onClick={() => handleClose()} sx={{ float: 'right' }}>
                            <CloseIcon sx={{ color: '#FFD358' }} fontSize="medium" />
                        </IconButton>
                        <Grid container paddingTop={4}>
                            <Grid item xs={2}/>
                            <Grid item xs={8} sx={{ textAlign: 'center' }}>
                                <FileUpload
                                    header="Danışman Onayı"
                                    text="Belgede ki bilgilerin doğru olduğunu bildiririm."
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </center>
            </Modal>
        </>
    )
}

export default ModalButton