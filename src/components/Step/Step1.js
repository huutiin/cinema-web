import React, {useContext} from 'react';
import {StepperContext} from '../../contexts/StepperContext';

const Step1 = () => {
  const {userData, setUserData} = useContext(StepperContext)
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  }
  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          User Name
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            type='text'
            name='userName'
            onChange={handleChange}
            value={userData["username"] || ""}
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
            placeholder='User Name'
          />
        </div>
      </div>
      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Pass Word
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={userData["password"] || ""}
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
            placeholder='Password'
          />
        </div>
      </div>
      
    </div>
  )
}

export default Step1
