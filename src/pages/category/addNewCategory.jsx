import React, { useState } from 'react'
import ImageUpload from '../../components/common/dropZone/imageUpload';
import InputCompAuth from '../../components/common/InputComp/InputCompAuth';

const AddNewCategory = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (file) => {
    setUploadedImage(URL.createObjectURL(file));
  };

  return (
    <div className='p-4 w-full flex flex-wrap  justify-between '>
      <InputCompAuth 
        label="Full Name"
        value={''}
        // onChange={handleNameChange}
        // error={nameError}
        type='text'
      />
      <InputCompAuth 
        label="Full Name"
        value={''}
        // onChange={handleNameChange}
        // error={nameError}
        type='text'
      />
    
      <InputCompAuth 
        label="Full Name"
        value={''}
        // onChange={handleNameChange}
        // error={nameError}
        type='text'
      />
      
      {/* <ImageUpload onUpload={handleImageUpload} /> */}

    </div>
  )
}

export default AddNewCategory;