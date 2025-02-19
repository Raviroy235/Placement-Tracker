import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DefaultProfile from '../../../assets/Default-profile.jpg';

const HiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  height: 1,
  position: 'absolute',
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ImageStyle = styled('img')({
  borderRadius: '50%',
  width: '15vw',
  height: '15vw',
  objectFit: 'cover',
});

export default function UploadProfilePic() {
  const [selectedFile, setSelectedFile] = useState(DefaultProfile);

  return (
    <div>
      <ImageStyle src={selectedFile} alt="Profile" />
      <Button component="label" variant="contained" startIcon={<AddAPhotoIcon />}>
        <HiddenInput type="file" accept="image/png, image/jpeg" />
      </Button>
    </div>
  );
}
