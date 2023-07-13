import React from 'react'
import IconBtn from './IconBtn'

const ConfirmationModal = ({ modalData }) => {
    return (
        <div className='absolute flex justify-center items-center top-0 left-0 z-50 w-full h-full bg-white/10 backdrop-blur-[2px]'>
            <div className='flex flex-col gap-8 p-8 border rounded-md border-richblack-700 bg-richblack-800'>
                <div className='space-y-1'>
                    <h1 className='text-3xl font-semibold text-richblack-5'>
                        {modalData.heading}
                    </h1>
                    <p className='text-base font-medium text-richblack-300'>
                        {modalData.description}
                    </p>
                </div>
                <div className='flex gap-8'>
                    <IconBtn
                        active={true}
                        onclick={modalData.btn1handler}
                    >
                        {modalData.btn1text}
                    </IconBtn>
                    <IconBtn
                        active={false}
                        onclick={modalData.btn2handler}
                    >
                        {modalData.btn2text}
                    </IconBtn>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal