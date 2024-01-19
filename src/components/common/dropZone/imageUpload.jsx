import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCloseCircle } from 'react-icons/io';

const ImageUpload = ({ onUpload }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
      setUploadedImage(acceptedFiles[0]);
    }
  }, [onUpload]);

  const removeImage = () => {
    setUploadedImage(null);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={{ border: '2px solid #ccc', borderRadius:'10px' ,padding: '10px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        {uploadedImage ? (
          <div>
            <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            <IoMdCloseCircle onClick={removeImage} style={{ cursor: 'pointer', marginTop: '10px' }} />
          </div>
        ) : (
          <p>Drag & drop an image here, or click to select one</p>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
