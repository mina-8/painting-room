import React from 'react'

const Filter = () => {
  return (
    <div className='flex justify-between items-center bg-gray-200 w-full p-4 rounded-lg gap-4'>
        <div className='text-2xl font-bold'>Filter</div>
        <form
        className='w-full'
        >
            <input 
            type='search'
            placeholder='search'
            className='rounded-lg border-2 p-2 w-full'
            />
        </form>
    </div>
  )
}

export default Filter