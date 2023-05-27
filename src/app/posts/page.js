import Post from "../../../components/Post/Post";

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
};

export default async function Page(){
    let data = await getData();
    return (
        <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-white">
            {data.map((d) => {
                return <Post key={d.id} post={d} />
            })}
        </div>
    )
}
