"use client";
import { useState } from "react"

export default function Page(){
    const[password, setPassword] = useState({
        currentPass: "",
        newPass: "",
        confirmPass: "",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setPassword((prev)=> ({...prev, [name]: value}))
    }

    return (
        <div className="container">
            <h1 className="text-3xl font-semibold mb-5">Password Setting</h1>
            <form className="grid grid-cols-none gap-x-3 gap-y-5 max-w-sm">
                <label className="block text-sm font-medium text-slate-700">Current Password
                    <input type="text" name="currentPass" value={password.currentPass} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
                <label className="block text-sm font-medium text-slate-700">New Password
                    <input type="text" name="newPass" value={password.newPass} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
                <label className="block text-sm font-medium text-slate-700">Confirm Password
                    <input type="text" name="confirmPass" value={password.confirmPass} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
               

                <div className="mt-3">
                    <button type="button" className="p-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Change Password</button>
                    {/* <button type="button" className="p-2 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200">Cancel</button> */}
                </div>
            </form>
        </div>
    )
}