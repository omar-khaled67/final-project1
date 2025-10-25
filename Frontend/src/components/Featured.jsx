import React from 'react'

function Featured() {
  return (
    <div className="flex px-[200px] mt-[100px]">
        <div className="bg-gray-200 h-[400px] w-[510px] z-10 mt-[20px] ">
        <div className="m-10">
          <h3 className="text-[25px]">Who We Are?</h3>
          <hr className="bg-red-500 w-[100px] h-[3px] my-[20px]" />
          <span className="mt-[20px]">
            BloodBridge is for public donation center with blood donation
            members in the changing health care system.
          </span>
          <ul>
            <li className="mt-2">1. Specialist blood donors and clinical supervision.</li>
            <li className="mt-2">2. Increasing communication with our members.</li>
            <li className="mt-2">3. High quality assessment, diagnosis and treatment.</li>
            <li className="mt-2">4. Examine critically to ensure alignment.</li>
            <li className="mt-2">5. The extra care of a multi-disciplinary team.</li>
          </ul>
        </div>
        </div>
        <div className='h-[450px] w-[500px] ml-[-30px]'>
            <video src="/video.mp4" height="350px" width="350px" loop muted autoPlay></video>
        </div>

    </div>
  )
}

export default Featured
