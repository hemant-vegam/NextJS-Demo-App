import Link from "next/link";
import Post from "../../../../components/Post/Post";

const getUserName = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return user;
}

const getUserPosts = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const posts = await res.json();
        const user = await getUserName(id);
        return [posts, user];
}


export default async function Page({params}){
    const [posts, user] = await getUserPosts(params.userID);
    return (
        <div className="container w-11/12 md:w-9/12 mx-auto mt-4 ">
            <div className="px-2 py-3 grid grid-cols-4 bg-white shadow-xl">
                <div className="mx-auto col-span-12 w-24 h-24 md:col-span-2 md:w-48 md:h-48 rounded-full overflow-hidden shadow-md">
                    <img className="" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                </div>
                <div className="col-span-12 md:col-span-2 flex flex-col gap-2 text-center mt-2 md:text-left md:mt-0">
                    <h2 className="text-2xl font-semibold">{user.name}</h2>
                    <h4>{user.address.city}</h4>
                    <a href={`https://${user.website}`} className="text-blue-700" target="_blank">{user.website}</a>
                </div>
            </div>
            <div className="border-y-2 border-x-0 my-4">
                <h2 className="text-center font-bold text-3xl my-4">My Posts</h2>
            </div>
            <div className="p-4 grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    posts.map((post) => {
                        return <Post key={post.id} post={post} />
                    })
                }
            </div>
        </div>
    )
}