"use client";

import { useState } from "react"

export default function Page() {
    const [user, setUser] = useState({
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
    }

    return (
        <div className="container">
            <h1 className="text-3xl font-semibold mb-5">Account Setting</h1>
            <form className="grid grid-cols-2 gap-x-3 gap-y-5">
                <label className="block text-sm font-medium text-slate-700">Username
                    <input type="text" name="username" value={user.username} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
                <label className="block text-sm font-medium text-slate-700">Name
                    <input type="text" name="name" value={user.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
                <label className="block text-sm font-medium text-slate-700">Email
                    <input type="text" name="email" value={user.email} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
                <label className="block text-sm font-medium text-slate-700">Phone
                    <input type="text" name="phone" value={user.phone} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
                {/* <label className="block text-sm font-medium text-slate-700 col-span-2">Address
                    <textarea type="text" name="address" value={user.address} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>
                <label className="block text-sm font-medium text-slate-700">Company
                    <input type="text" name="company" value={user.company} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label> */}
                <label className="block text-sm font-medium text-slate-700">Website
                    <input type="text" name="website" value={user.website} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                </label>

                <div className="col-span-2 mt-3">
                    <button type="button" className="p-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Update</button>
                    <button type="button" className="p-2 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-200">Cancel</button>
                </div>
            </form>
        </div>
    )
}