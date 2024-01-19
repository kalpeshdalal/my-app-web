import React from 'react'
import { BiCategory } from 'react-icons/bi';
import PrimaryButton from '../../components/common/buttonComp/buttonComp';
import SearchComp from '../../components/common/searchComp/searchComp';
import TableComp from '../../components/common/tableComp';
import { useNavigate } from 'react-router-dom';
import { LuPackage } from 'react-icons/lu';

const Products = () => {

  const navigate = useNavigate()
  const handleSearch = (query) => {
    console.log(query);
  };
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
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
      accessor: 'mrp',
    },

    {
      Header: 'Image',
      accessor: 'image',
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
      Cell: () => (
        <div className="flex justify-center space-x-2">
          <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
          <button className="text-red-600 hover:text-red-900">Delete</button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 123,
      name: 'Amul Taaza',
      packSize: '500 ml',
      category: 'Milk',
      mrp: 'Rs 27',
      image: '/path/to/amul-taaza-image.jpg',
      status: 'Active',
    },
    {
      id: 124,
      name: 'Gokul Cow',
      packSize: '500 ml',
      category: 'Milk',
      mrp: 'Rs 27',
      image: '/path/to/gokul-cow-image.jpg',
      status: 'Inactive',
    },
    {
      id: 125,
      name: 'Shimla Apple',
      packSize: '1 kg',
      category: 'Fruits',
      mrp: 'Rs 150',
      image: '/path/to/shimla-apple-image.jpg',
      status: 'Active',
    },
  ];
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