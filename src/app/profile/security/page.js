export default function Page(){
    return (
        <div className="container">
            <h1 className="text-3xl font-semibold mb-5">Security Setting</h1>
            <div className="grid grid-cols-1 gap-y-5">
                <label className="group select-none">
                    <input type="checkbox" className="scale-150 mr-2 align-middle transition-all group-active:scale-125"/>
                    Enable two step authentication
                </label>
                <label className="group select-none">
                    <input type="checkbox" className="scale-150 mr-2 align-middle transition-all group-active:scale-125" checked/>
                    Lorem ipsum content
                </label>
                <span className="select-none">
                    Who can see my birth date?
                    <div className="flex gap-x-5 mt-1">
                        <label className="group">
                            <input type="radio" name="rdbBirthdate" className="scale-150 mr-2 align-middle transition-all group-active:scale-125" checked/>
                            Public
                        </label>
                        <label className="group">
                            <input type="radio" name="rdbBirthdate" className="scale-150 mr-2 align-middle transition-all group-active:scale-125"/>
                            Friends
                        </label>
                        <label className="group">
                            <input type="radio" name="rdbBirthdate" className="scale-150 mr-2 align-middle transition-all group-active:scale-125"/>
                            Only me
                        </label>
                    </div>
                </span>
            </div>
        </div>
    )
}