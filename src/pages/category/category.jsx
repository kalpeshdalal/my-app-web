import React, { useEffect, useState } from 'react'
import { BiCategory } from 'react-icons/bi';
import PrimaryButton from '../../components/common/buttonComp/buttonComp';
import SearchComp from '../../components/common/searchComp/searchComp';
import TableComp from '../../components/common/tableComp';
import { useNavigate } from 'react-router-dom';
import { apiDELETE, apiGET } from '../../utilies/apiHandler';
import { toast } from "react-toastify";

const Category = () => {
  const [data, setData] = useState([
  ])
  const navigate = useNavigate()
  const handleSearch = (query) => {
    console.log(query);
  };
  const columns = [
    {
      Header: 'ID',
      accessor: 'productId',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ cell: { value } }) => (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {value}
        </span>
      ),
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => (
        <div className="flex justify-center space-x-2 ml-[-60px]">
          <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => navigate(`/category/${row.original.id}`)}>Edit</button>
          <button className="text-red-600 hover:text-red-900" onClick={() => deleteCategory(row.id)}>Delete</button>
        </div>
      ),
    },
  ];

  const deleteCategory = async (id) => {
    try {
      const response = await apiDELETE(`/v1/category/delete-category/${id}`);

      if (response?.data?.status) {
        toast.success('Deleted!')
        getAllCategories();
      }else{
        toast.error('Error !!')
      }
      
    } catch (error) {
      toast.error('Error : ',error  )
      console.error("Error deleting category:", error);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await apiGET('/v1/category/get-all')
      if (response?.data?.status) {
        const modifiedData = response?.data?.data?.map(item => {
          return {
            ...item,

            productId: item.seqId,
            status: item.active ? 'Active' : 'Inactive',
            active: undefined
          };
        });
        setData(modifiedData);
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    getAllCategories()

  }, [])
  return (
    <div className='p-4 w-full '>
      <div className='shadow-md w-full  h-[83vh] rounded-md'>
        <div className='py-4 px-6 flex gap-2  items-center justify-between'>
          <div className='flex gap-2 items-center font-extrabold  '>
            <BiCategory className='text-xl ' /> Category
          </div>
          <div className='w-[400px]'>
            <SearchComp onSearch={handleSearch} />
          </div>
          <div>
            <PrimaryButton text={'Add New'} onClick={() => navigate('/category/new')} />
          </div>
        </div>
        <TableComp columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Category;