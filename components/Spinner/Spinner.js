"use client";

function Spinner({position}){
    const p = position || "fixed";
    return (
        <div className={`${p} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <div className="w-20 h-20 animate-spin rounded-full border-8 border-t-yellow-300 border-l-violet-500 border-r-red-500 border-b-sky-400">
            </div>
            <h4 className="text-xl font-semibold mt-3 animate-bounce">Loading...</h4>
        </div>
    )
}

export default Spinner;