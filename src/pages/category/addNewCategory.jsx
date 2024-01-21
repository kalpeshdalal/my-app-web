import React, { useEffect, useState } from 'react'
import ImageUpload from '../../components/common/dropZone/imageUpload';
import InputCompAuth from '../../components/common/InputComp/InputCompAuth';
import DropdownComp from '../../components/common/dropDown';
import { useNavigate, useParams } from 'react-router-dom';
import DropdownCompAuth from '../../components/common/dropDown';
import { apiGET, apiPOST, apiPUT } from '../../utilies/apiHandler';
import { toast } from "react-toastify";

const AddNewCategory = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [status, setStatus] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [description, setDescription] = useState(null);

  const [statusErr, setStatusErr] = useState(null);
  const [categoryNameErr, setCategoryNameErr] = useState(null);
  const [descriptionErr, setDescriptionErr] = useState(null);

  const save = async () => {
    if (validate()) {
      let payload = {
        active: Boolean(status),
        name: categoryName,
        description: description
      }
      if (params?.id) {
        try {
          const response = await apiPUT(`v1/category/update-category/${params?.id}`, payload)
          console.log(response);
          if (response?.data?.status) {
            toast.success("success");
            navigate('/category')
          } else {
            toast.error('error')
          }
        } catch (error) {
          toast.error('error ', error)
        }

      } else {
        try {
          const response = await apiPOST(`/v1/category/add-category`, payload)
          if (response?.data?.status) {
            toast.success("success");
            navigate('/category')
          }else{
            toast.error('error')
          }
        } catch (error) {
          toast.error('error ', error)
        }


      }

    }
  }

  const getData = async (id) => {
    try {
      const response = await apiGET(`/v1/category/${id}`);
      if (response?.data?.status) {
        setCategoryName(response?.data?.data?.name)
        setDescription(response?.data?.data?.description)
        setStatus(response?.data?.data?.active)
      }
    } catch (error) {
    }

  }

  const validate = () => {
    let isValid = true;


    if (!categoryName) {
      setCategoryNameErr('Category is required');
      isValid = false
    }

    if (!description) {
      console.log(description);
      setDescriptionErr('Description is required');
      isValid = false;
    }
    if (!status) {
      setStatusErr('Status is required');
      isValid = false
    }
    return isValid;
  }

  useEffect(() => {
    if (params?.id) {
      getData(params?.id)
    }
  }, [params?.id])


  return (
    <div className='p-4 mt-4 w-full flex flex-wrap gap-3  justify-between '>
      <div className=' w-[30%]'>
        <InputCompAuth
          label="Category Name"
          type='text'
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          error={categoryNameErr}
          onFocus={() => setCategoryNameErr('')}
        />
      </div>

      <div className=' w-[30%]'>
        <InputCompAuth
          label="Description"
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={descriptionErr}
          onFocus={() => setDescriptionErr('')}
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
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          error={statusErr}
          onFocus={() => setStatusErr('')}
        />
      </div>

      <div className=' gap-3 w-[80%] items-center my-6 flex justify-end fixed bottom-0  '>
        <div>
          <button onClick={() => navigate('/category')} className=" mr-2 mt-2 px-10 py-1 rounded-full  text-lg border  border-[#676767]">Cancel</button>
        </div>
        <div>
          <button onClick={() => save()} className="  mr-2 mt-2 px-14 py-1 rounded-full  text-lg border text-white bg-[#662671]">Save</button>
        </div>
      </div>



    </div>
  )
}

export default AddNewCategory;