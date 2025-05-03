import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='m-10'>

        <h1 className='text-2xl mb-5'>More Resources on Water Conservation and Maintenance</h1>

        <div className='grid grid-cols-1 p-5 bg-white rounded-lg md: w-[800px]'>
            <div className='mb-4' >
                <p className='font-bold'>Vally Water</p>
                <Link href={"https://www.valleywater.org/saving-water/indoor-conservation/water-saving-devices"} target="_blank" className=' hover:text-blue-500'>
                <button className='cursor-pointer'>https://www.valleywater.org/saving-water/indoor-conservation/water-saving-devices</button>
            </Link>
            </div>
            
            <div className='mb-4' >
                <p className='font-bold'>Climate Action</p>
                <Link href={"https://climateaction.ca.gov/water-savings/"} target="_blank" className='mb-2 hover:text-blue-500'>
                    <button className='cursor-pointer'>https://climateaction.ca.gov/water-savings/</button>
                </Link>
            </div>
            
            <div className='mb-4' >
                <p className='font-bold'>United States Environmental Protection Agency</p>
                <Link href={"https://www.epa.gov/watersense/home-maintenance"} target="_blank" className='mb-2 hover:text-blue-500'>
                    <button className='cursor-pointer'>https://www.epa.gov/watersense/home-maintenance</button>
                </Link>
            </div>
            
            <div className='mb-4' >
                <p className='font-bold'>San Joaquin County Flood Control & Water Conservation District</p>
                <Link href={"https://www.sjwater.org/Water-Resources-Management/Conservation/Conservation/Landscaping-Tips"} target="_blank" className='mb-2 hover:text-blue-500'>
                    <button className='cursor-pointer'>https://www.sjwater.org/Water-Resources-Management/Conservation/Conservation/Landscaping-Tips</button>
                </Link>
            </div>
            
            <div className='mb-4' >
                <p className='font-bold'>California Department of Water Resources</p>
                <Link href={"https://water.ca.gov/Programs/Water-Use-And-Efficiency"} target="_blank" className='mb-2 hover:text-blue-500'>
                    <button className='cursor-pointer'>https://water.ca.gov/Programs/Water-Use-And-Efficiency</button>
                </Link>
            </div>
            
        </div>

    </div>
  )
}

export default page