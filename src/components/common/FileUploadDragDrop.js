import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import React, { useState, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
const NoImage = ({ title, description }) => {
  return (
    <>
      <Typography variant="h6" component="h2" paragraph mb={0}>
        {title}
      </Typography>
      <Typography
        component="span"
        paragraph
        className="file-upload-drag-drop__description"
      >
        {description}
      </Typography>

      <i className="icon-upload-icon" />

      <Typography
        component="span"
        paragraph
        className="file-upload-drag-drop__drag-drop-browse-upload"
      >
        Browse to Upload
      </Typography>
    </>
  )
}

const ImageCropper = ({ src, setBackgroundImage }) => {
  const [cropper, setCropper] = useState()

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      const backgroundImage = `url(${cropper.getCroppedCanvas().toDataURL()})`

      setBackgroundImage({
        backgroundImage,
        padding: '20px',
      })
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <AvatarGroup
        className="pitch-deck__avatars"
        onClick={getCropData}
        style={{ position: 'absolute', right: '22px', top: '77px' }}
      >
        <Avatar>
          <CheckCircleIcon sx={{ width: 32, height: 32, color: '#1672EC' }} />{' '}
        </Avatar>
      </AvatarGroup>
      <br />
      <br />
      <Cropper
        style={{ height: '265px', width: '100%' }}
        zoomTo={0.5}
        initialAspectRatio={1}
        preview=".img-preview"
        src={src}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        onInitialized={(instance) => {
          setCropper(instance)
        }}
        guides={true}
      />
    </div>
  )
}

const FileUploadDragDrop = (props) => {
  const [backgroundImage, setBackgroundImage] = useState(undefined)
  const [src, setSrc] = useState()

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setBackgroundImage(undefined)

      const reader = new FileReader()
      reader.onload = () => {
        setSrc(reader.result)
      }
      reader.readAsDataURL(acceptedFiles[0])
    },
  })
  const isShowDropzone = src === undefined && backgroundImage === undefined
  const isShowImageCropper = src !== undefined && backgroundImage === undefined

  return (
    <Box
      className="file-upload-drag-drop"
      {...getRootProps()}
      style={{ ...backgroundImage, paddingTop: src !== undefined ? '0px' : '' }}
    >
      {isShowDropzone ? (
        <>
          <NoImage {...props} />
          <input {...getInputProps()} />
        </>
      ) : isShowImageCropper ? (
        <ImageCropper src={src} setBackgroundImage={setBackgroundImage} />
      ) : (
        <input {...getInputProps()} />
      )}
    </Box>
  )
}

export default FileUploadDragDrop
