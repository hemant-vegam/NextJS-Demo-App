import Link from "next/link";
import Comment from "../../../../components/Comment/Comment";

const getUserName = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return user.name;
}


const getPostComments = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const comments = await res.json();
    return comments;
}

const getPost = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const comments = await getPostComments(id);
        const post = await res.json();
        const name = await getUserName(post.userId);
        return {...post, name, comments};
}


export default async function Page({params}){
    const post = await getPost(params.postID);
    return (
        <div className="container w-11/12 md:w-9/12 mx-auto mt-4">
            <div className="p-4 bg-white shadow-xl">
                <Link href={`users/${post.userId}`} className="text-xs font-semibold text-sky-600">{post.name}</Link>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <h2>{post.body}</h2>
            </div>
            <div className="border-y-2 border-x-0 my-4">
                <h2 className="text-center font-bold text-xl my-2">Comments</h2>
            </div>
            <div className="p-4 bg-white">
                {post.comments.map((comment,i) => <Comment key={i} comment={comment} />)}
            </div>
        </div>
    )
}