import React from 'react'

const Header = () => {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex gap-x-4 items-center justify-center font-Roboto'>
                <div className='bg-main w-[40px] h-[40px] flex justify-center items-center text-white font-[700] rounded-full'>1</div>
                <div className=' font-[700] text-main'>Job Location</div>
            </div>
            <div className='w-[10%] h-[1px] bg-primary'> </div>
             <div className='flex gap-x-4 items-center justify-center font-Roboto'>
                <div className='bg-primary w-[40px] h-[40px] flex justify-center items-center text-white font-[700] rounded-full'>2</div>
                <div className=' font-[700] text-primary'>Job Position</div>
            </div>
             <div className='w-[10%] h-[1px] bg-primary'> </div>
            <div className='flex gap-x-4 items-center justify-center font-Roboto'>
                <div className='bg-primary w-[40px] h-[40px] flex justify-center items-center text-white font-[700] rounded-full'>3</div>
                <div className=' font-[700] text-primary'>Personal Details</div>
            </div>
        </div>
    )
}

export default Header