import React, { useEffect, useState } from 'react'
import { BiCategory } from 'react-icons/bi';
import PrimaryButton from '../../components/common/buttonComp/buttonComp';
import SearchComp from '../../components/common/searchComp/searchComp';
import TableComp from '../../components/common/tableComp';
import { useNavigate } from 'react-router-dom';
import { LuPackage } from 'react-icons/lu';
import { apiDELETE, apiGET } from '../../utilies/apiHandler';
import { toast } from "react-toastify";

const Products = () => {

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
      Header: 'Pack Size',
      accessor: 'packSize',
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
    {
      Header: 'MRP',
      accessor: 'price',
    },

    {
      Header: 'Image',
      accessor: 'productImageUrl',
      Cell: ({ cell: { value } }) => <img src={value} alt="product" className="w-10 h-10" />,
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
        <div className="flex justify-center space-x-2">
          <button className="text-indigo-600 hover:text-indigo-900 mr-2" onClick={() => navigate(`/products/${row.original.id}`)}>Edit</button>
          <button className="text-red-600 hover:text-red-900" onClick={() => deleteProduct(row.original.id)}>Delete</button>
        </div>
      ),
    },
  ];

  const [data, setData] = useState([
  ])
  const getAllProducts = async () => {
    try {
      const response = await apiGET('/v1/product/get-all');

      if (response?.data?.status) {
        const modifiedData = response?.data?.data?.map(item => ({
          ...item,
          productId: item.seqId,
          status: item.active ? 'Active' : 'Inactive',
          active: undefined
        }));
        setData(modifiedData);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to delete a product
  const deleteProduct = async (id) => {
    try {
      console.log(id);
      const resp = await apiDELETE(`/v1/product/delete-product/${id}`);
      if (resp?.data?.status) {
        toast.success('Deleted!')
      } else {
        toast.error('Error!')
      }

      getAllProducts();
    } catch (error) {
      toast.error('Error :', error)
      console.error("Error deleting product:", error);
    }
  };


  useEffect(() => {
    getAllProducts();
  }, []);
  // console.log(data);
  return (
    <div className='p-4 w-full '>
      <div className='shadow-md w-full  h-[83vh] rounded-md'>
        <div className='py-4 px-6 flex gap-2  items-center justify-between'>
          <div className='flex gap-2 items-center font-extrabold  '>
            <LuPackage className='text-xl ' /> Products
          </div>
          <div className='w-[400px]'>
            <SearchComp onSearch={handleSearch} />
          </div>
          <div>
            <PrimaryButton text={'Add New'} onClick={() => navigate('/products/new')} />
          </div>
        </div>
        <TableComp columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Products;