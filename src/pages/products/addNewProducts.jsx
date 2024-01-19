import React, { useState } from 'react'
import ImageUpload from '../../components/common/dropZone/imageUpload';
import InputCompAuth from '../../components/common/InputComp/InputCompAuth';
import DropdownComp from '../../components/common/dropDown';
import { useNavigate } from 'react-router-dom';

const AddNewProducts = () => {
    const navigate = useNavigate()
    const [uploadedImage, setUploadedImage] = useState(null);
    const [status, setStatus] = useState(null);
    const [categoryName, setCategoryName] = useState(null);
    const [description, setDescription] = useState(null);

    const [statusErr, setStatusErr] = useState(null);
    const [categoryNameErr, setCategoryNameErr] = useState(null);
    const [descriptionErr, setDescriptionErr] = useState(null);

    const handleImageUpload = (file) => {
        setUploadedImage(URL.createObjectURL(file));
    };

    return (
        <div className='p-4 mt-4 w-full flex flex-wrap gap-3  justify-between '>
            <div className='w-[30%]'>
                <DropdownComp
                    label="Category"
                    options={[
                        { value: 'fruits', label: 'Fruits' },
                        { value: 'milk', label: 'Milk' },
                    ]}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    error={statusErr}
                />
            </div>
            <div className=' w-[30%]'>
                <InputCompAuth
                    label="Product Name"
                    type='text'
                    value={categoryName}
                    // onChange={handleEmailChange}
                    error={categoryNameErr}
                />
            </div>

            <div className=' w-[30%]'>
                <InputCompAuth
                    label="Pack Size"
                    type='text'
                    value={description}
                    // onChange={handleEmailChange}
                    error={descriptionErr}
                />
            </div>
            <div className=' w-[30%]'>
                <InputCompAuth
                    label="MRP"
                    type='text'
                    value={categoryName}
                    // onChange={handleEmailChange}
                    error={categoryNameErr}
                />
            </div>

            <div className=' w-[30%]'>
                <InputCompAuth
                    label="Description"
                    type='text'
                    value={description}
                    // onChange={handleEmailChange}
                    error={descriptionErr}
                />
            </div>
            <div className='w-[30%]'>
                <DropdownComp
                    label="status"
                    options={[
                        { value: true, label: 'Active' },
                        { value: false, label: 'Inactive' },
                    ]}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    error={statusErr}
                />
            </div>




            <div className=' gap-3 w-[80%] items-center my-6 flex justify-end fixed bottom-0  '>
                <div>
                    <button onClick={() => navigate('/products')} className=" mr-2 mt-2 px-10 py-1 rounded-full  text-lg border  border-[#676767]">Cancel</button>
                </div>
                <div>
                    <button className="  mr-2 mt-2 px-14 py-1 rounded-full  text-lg border text-white bg-[#662671]">Save</button>
                </div>
            </div>

            {/* <ImageUpload onUpload={handleImageUpload} /> */}

        </div>
    )
}

export default AddNewProducts;