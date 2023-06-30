import { useRouter } from 'next/router'
import React from 'react'

const ManagementComponent = () => {
  const router = useRouter();
  
  return (
    <div className="w-full font-poppins mx-auto 2xl:container max-w-7xl items-center bg-management-bg bg-cover">
        
        <div className="md:w-2/3 h-96 min-h-full text-center flex flex-col justify-center align-center  bg-handShake bg-center bg-cover bg-no-repeat  rounded-xl	 m-auto">
            <h1 className="text-4xl text-center text-white font-bold mt-4 mb-2 px-2 py-2">Push your product to next level</h1>
             <p className="text-md text-center text-white font-bold   mb-2  px-2 py-2">Get access to the best IT solution in order to leverage your business.</p>
           <div>
           <button className="bg-logoColor hover:bg-blue-700 text-center  mt-4  py-2 px-4 my-4 cursor-pointer rounded-2xl text-white"
            onClick={()=> router.push('/contact')}
           >Get Started</button>
           </div>

        </div>

      

       
        <br className=''/>
    </div>
  )
}

export default ManagementComponent