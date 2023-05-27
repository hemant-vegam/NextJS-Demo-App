function Comment({comment}){
    return (
        <div className="p-2 my-3 grid grid-cols-1 gap-2  border">
            <div>
                <h6 className="text-black text-sm font-semibold">{comment.name}</h6>
                <h6 className="text-sm text-gray-500">{comment.email}</h6>
            </div>
            <p className="">{comment.body}</p>
        </div>
    )
}

export default Comment;