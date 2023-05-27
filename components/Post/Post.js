"use client";

import Link from "next/link";


function Post({post}){
    return (
        <Link href={`/posts/${post.id}`} className="p-2 shadow-sm border border-gray-200 rounded-lg transition hover:border-gray-500 hover:-translate-y-1 hover:shadow-md">
                {/* <h6 className="text-blue-500 font-semibold text-xs block">{}</h6> */}
                <h3 className="text-black font-semibold text-lg block">{post.title}</h3>
                <p className="text-gray-500 font-normal text-sm block">{post.body}</p>
        </Link>
    )
}

export default Post;