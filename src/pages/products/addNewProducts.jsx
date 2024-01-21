import React, { useEffect, useState } from 'react'
import ImageUpload from '../../components/common/dropZone/imageUpload';
import InputCompAuth from '../../components/common/InputComp/InputCompAuth';
import DropdownComp from '../../components/common/dropDown';
import { useNavigate, useParams } from 'react-router-dom';
import { apiGET, apiPOST, apiPUT } from '../../utilies/apiHandler';
import DropdownCompAuth from '../../components/common/dropDown';
import { toast } from "react-toastify";

const AddNewProducts = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [categoryOpt, setCategoryOpt] = useState([])
    const [item, setItem] = useState({
        name: '',
        packSize: '',
        productImageUrl: '',
        price: 0,
        active: null,
        category: '',
        createdAt: '',
        updatedAt: '',
        seqId: 0,
        id: '',

    })

    const [itemErr, setItemErr] = useState({})
    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        });
    };
    const handleStatusDropDownChange = (event) => {
        setItem(
            {
                ...item,
                active: event.target.value
            });
    };
    const handleCategoryDropDownChange = (event) => {
        setItem(
            {
                ...item,
                category: event.target.value
            });
    };

    const handleImageUpload = (file) => {
        setItem({
            ...item,
            productImageUrl: URL.createObjectURL(file)
        });
    };

    const getProductData = async (id) => {
        try {
            const response = await apiGET(`/v1/product/${id}`)
            if (response?.data?.data) {
                setItem(response?.data?.data)
            }
        } catch (error) {

        }
    }
    const getAllCategories = async () => {
        try {
            const response = await apiGET('/v1/category/get-all')
            if (response?.data?.status) {
                const modifiedData = response?.data?.data?.map(item => ({
                    value: item.name,
                    label: item.name.toUpperCase()  
                }));
                setCategoryOpt(modifiedData)
            }
        } catch (error) {

        }
    }

    const save = async () => {
        if (validateItem()) {
            if (params?.id) {
                try {
                    const response = await apiPUT(`/v1/product/update-product/${params?.id}`, item)
                    if (response?.data?.status) {
                        toast.success("success");
                        navigate('/products')
                    }else{
                        toast.error('error')
                    }
                } catch (error) {
                    toast.error('error : ', error)
                }

            } else {
                try {
                    console.log(item);
                    const response = await apiPOST(`/v1/product/add-product`, item)
                    if (response?.data?.status) {
                        toast.error("success");
                        navigate('/products')
                    }else{
                        toast.error('Error!')
                    }
                } catch (error) {
                    toast.error('Error : ', error)
                }
            }

        }
    };

    const validateItem = () => {
        let errors = {};
        let isValid = true;

        if (!item.name.trim()) {
            errors.name = 'Product name is required';
            isValid = false;
        }

        if (!item.packSize.trim()) {
            errors.packSize = 'Pack size is required';
            isValid = false;
        }

        if (isNaN(item.price) || item.price <= 0) {
            errors.price = 'Price must be a positive number';
            isValid = false;
        }

        if (!item.category.trim()) {
            errors.category = 'Category is required';
            isValid = false;
        }

        if (!item.productImageUrl.trim()) {
            errors.productImageUrl = 'Image URL is required';
            isValid = false;
        }
        if (!item.active) {
            errors.active = 'Status is required';
            isValid = false;
        }

        setItemErr(errors);
        return isValid;
    };
    
    useEffect(() => {
        if (params?.id) {
            getProductData(params?.id)
        }
    }, [params?.id])
    useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <div className='p-4 mt-4 w-full flex flex-wrap gap-3  justify-between '>
            <div className='w-[30%]'>
                <DropdownComp
                    label="Category"
                    name="category"
                    options={categoryOpt}
                    value={item?.category}
                    onChange={handleCategoryDropDownChange}
                    error={itemErr.category}
                    onFocus={() => setItemErr({})}
                />
            </div>
            <div className=' w-[30%]'>
                <InputCompAuth
                    label="Product Name"
                    type='text'
                    value={item?.name}
                    name='name'
                    onChange={handleChange}
                    error={itemErr.name}
                    onFocus={() => setItemErr({})}
                />
            </div>

            <div className=' w-[30%]'>
                <InputCompAuth
                    label="Pack Size"
                    type='text'
                    name='packSize'
                    value={item?.packSize}
                    onChange={handleChange}
                    error={itemErr.name}
                    onFocus={() => setItemErr({})}
                />
            </div>
            <div className=' w-[30%]'>
                <InputCompAuth
                    label="MRP"
                    type='text'
                    name='price'
                    value={item?.price}
                    onChange={handleChange}
                    error={itemErr.price}
                    onFocus={() => setItemErr({})}
                />
            </div>

            <div className='w-[30%]'>
                <DropdownCompAuth
                    label="status"
                    name='status'
                    options={[
                        { value: true, label: 'Active' },
                        { value: false, label: 'Inactive' },
                    ]}
                    value={item?.active}
                    onChange={handleStatusDropDownChange}
                    error={itemErr?.active}
                    onFocus={() => setItemErr({})}
                />
            </div>
            <div className='w-[30%]' onClick={() => setItemErr({})}>
                <ImageUpload onUpload={handleImageUpload} value={item?.productImageUrl} />
                {itemErr.productImageUrl && (
                    <p className="mt-2 text-sm text-red-600" id="">
                        {itemErr.productImageUrl}
                    </p>
                )}
            </div>




            <div className=' gap-3 w-[80%] items-center my-6 flex justify-end fixed bottom-0  '>
                <div>
                    <button onClick={() => navigate('/products')} className=" mr-2 mt-2 px-10 py-1 rounded-full  text-lg border  border-[#676767]">Cancel</button>
                </div>
                <div>
                    <button onClick={() => save()} className="  mr-2 mt-2 px-14 py-1 rounded-full  text-lg border text-white bg-[#662671]">Save</button>
                </div>
            </div>


        </div>
    )
}

export default AddNewProducts;