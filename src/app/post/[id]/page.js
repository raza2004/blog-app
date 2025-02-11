import { notFound } from 'next/navigation';
import Navbar from '../../../components/navbar';
import BottomBar from '../../../components/BottomBar';

export default async function Post({ params }) {
  // Use the destructured `id` directly.
  const { id } = await params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if (!res.ok) {
    notFound(); // Render the 404 page if the post doesn't exist.
  }
  
  const post = await res.json();
  // console.log(post);
  
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4 max-w-2xl mt-24 ">
        <article className="bg-white rounded-lg shadow-md p-6 border border-gray-200 ">
          <h1 className="text-2xl text-[#00246B] font-bold mb-4">{post.title}</h1>
          <p className=" mb-4 text-[#101820]">{post.body}</p>
          <div className="text-sm text-gray-500">
            <p>Post ID: {post.id}</p>
            <p>Author: User {post.userId}</p>
          </div>
        </article>
      </main>
      <BottomBar />
    </div>
  );
}
