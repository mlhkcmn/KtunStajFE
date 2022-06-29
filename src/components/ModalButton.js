import React from 'react'
import { Button, Typography, Modal, Box, IconButton, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import FileUpload from './common/FileUpload';
import Info from './common/Information';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const style = {
    maxWidth: '660px',
    minHeight: '583px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 2,
};
const styles = {
    paddingTop: '8%',
    overflowX: 'hidden',
    paddingBottom: '8%'
};

const ModalButton = (props) => {
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
                        <Grid container paddingTop={4} justifyContent='center' alignItems={'center'}>
                            <Grid item xs={2}/>
                            <Info />
                            <Grid item xs={8} sx={{ textAlign: 'center'}}>
                                <FileUpload
                                    header={props.header}
                                    text="Belgede ki bilgilerin doğru olduğunu bildiririm."
                                />
                            </Grid>
                            <Grid xs="6" lg="6" paddingTop={'18px'} justifyContent="center" alignItems={'center'} textAlign="center">
                            <button className='approvButtonCancel'>
                                <span className='approvText'>İptal</span>
                                <CancelOutlinedIcon className='approvIcon' />
                            </button>
                            </Grid>
                            <Grid xs="6" lg="6" paddingTop={'18px'} justifyContent="center" alignItems={'center'} textAlign="center">
                            <button className='approvButton'>
                                <span className='approvText'>Onayla</span>
                                <HowToRegOutlinedIcon className='approvIcon' />
                            </button>
                            </Grid>
                        </Grid>
                    </Box>
                </center>
            </Modal>
        </>
    )
}

export default ModalButton