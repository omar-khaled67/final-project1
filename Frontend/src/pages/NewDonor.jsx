const NewDonor = () => {
    return (
        <div className="flex justify-center items-center mim-h-screen">

            <div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
                <h2 className="font-semibold">New Donor</h2>
                <div className="flex flex-col my-[12px]">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="James Doe"
                        className="border-[#555] border-2 border-solid
                    p-[10px] w-[300px]"/>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="123 DownTown, NewYork"
                        className="border-[#555] border-2 border-solid
                    p-[10px] w-[300px]"/>
                    <label htmlFor="">Tel</label>
                    <input type="text" placeholder="(023) 241 1234"
                        className="border-[#555] border-2 border-solid
                    p-[10px] w-[300px]"/>
                    <label htmlFor="" className='text-[18px] mt-[10px] font-semibold'>Blood Group</label>
                    <select name="" id="" className='border-[#555] border-2 border-solid
                    p-[10px] w-[300px]'>
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="jame@example.com"
                        className="border-[#555] border-2 border-solid
                    p-[10px] w-[300px]"/>

                </div>
            </div>
            <div className="m-[20px] p-[20px] h-[80vh] w-[450px]">
                <div className="flex flex-col">
                    <label htmlFor="">Weight</label>
                    <input type="number" placeholder="50kg"
                        className="border-[#555] border-2 border-solid
                    p-[10px] w-[300px]"/>
                    <label htmlFor="">Date</label>
                    <input type="date" placeholder="2024/05/23"
                        className="border-[#555] border-2 border-solid
                    p-[10px] w-[300px]"/>

                    <label htmlFor="" className='text-[18px] mt-[10px] font-semibold'>
                        Do you have eny diseases
                    </label>
                    <textarea name="" id="" className='border-[#555] border-2 border-solid
                    p-[10px] w-[300px]' />
                    <button className="bg-[#444] cursor-pointer
                    text-white p-[10px] w-[300px] my-[10px]">Create</button>
                </div>
            </div>
        </div>
    )
}

export default NewDonor