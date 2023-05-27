export default function Page(){
    return (
        <div className="container">
        <h1 className="text-3xl font-semibold mb-5">Notification Setting</h1>
        <div className="grid grid-cols-1 gap-y-5">
            <label className="group select-none">
                <input type="checkbox" className="scale-150 mr-2 align-middle transition-all group-active:scale-125"/>
                Get friends birthday notification
            </label>
            <label className="group select-none">
                <input type="checkbox" className="scale-150 mr-2 align-middle transition-all group-active:scale-125" checked/>
                Get new device login notification
            </label>
        </div>
    </div>
    )
}