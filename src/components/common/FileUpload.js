import { Box, Typography } from '@mui/material'
import React from 'react'
import ImageUploading from 'react-images-uploading';

const FileUpload = (props) => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <>
            <Box sx={{ borderRadius: '10px', bgcolor: '#f5f5f5', border: '2px dashed #CEEBFF' }}>
                <Typography className='FileUploadHeader'>
                    {props.header}
                </Typography>
                <br />
                <Typography className='FileUploadText'>
                    {props.text}
                </Typography>
                <br />
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                        // write your building UI
                        <div>
                            <button
                                className='FileUploadButton'
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}>
                                Tıkla ya da Sürükle
                            </button>
                            &nbsp;
                            <button className='FileUploadButton' onClick={onImageRemoveAll}>
                                Fotoğrafları Kaldır
                            </button>
                            <br />
                            <br />
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" width="200" />
                                    <div className="image-item__btn-wrapper">
                                        <button onClick={() => onImageUpdate(index)}>Güncelle</button>
                                        <button onClick={() => onImageRemove(index)}>Kaldır</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>
                <br />
            </Box>
        </>
    )
}

export default FileUpload