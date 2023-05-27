import Image from "next/image"
import Link from "next/link"

const profileSetting = [
    {
        text: "Account",
        href: "account"
    },
    {
        text: "Password",
        href: "password"
    },
    {
        text: "Security",
        href: "security"
    },
    {
        text: "Notification",
        href: "notification"
    }
]

export default function Page({children}){
    return (
        <div className="p-4 container mx-auto">
            <div className="grid grid-cols-12 gap-2">
                <div className="md:hidden p-3 col-span-12 shadow-lg rounded-md border border-gray-200 self-start bg-white">
                    <div className="flex flex-col items-center justify-center mt-5">
                        <Image width={100} height={100} alt="profile-pic" className="w-28 h-28 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        <h1 className="text-xl font-bold my-3">Leanne Graham</h1>
                    </div>
                    <div className="flex justify-center">
                        <ul className="list-none flex overflow-x-auto">
                        {profileSetting.map((d) => 
                                <li><Link href={`/profile/${d.href}`} className="p-2 w-full inline-flex hover:bg-gray-200 transition-all">{d.text}</Link></li>
                        )}
                        </ul>
                    </div>
                </div>
                <div className="hidden md:block p-3 col-span-3 shadow-lg rounded-md border border-gray-200 self-start bg-white">
                    <div className="flex flex-col items-center justify-center mt-5">
                        <Image width={100} height={100} alt="profile-pic" className="w-28 h-28 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        <h1 className="text-xl font-bold my-3">Leanne Graham</h1>
                    </div>
                    <ul className="list-none">
                       {profileSetting.map((d) => 
                            <li><Link href={`/profile/${d.href}`} className="p-2 w-full inline-flex hover:bg-gray-200 transition-all">{d.text}</Link></li>
                       )}
                    </ul>
                </div>
                <div className="relative p-3 col-span-12 md:col-span-9 shadow-lg rounded-md border border-gray-200 bg-white">
                    {children}
                </div>
            </div>
        </div>
    )
}