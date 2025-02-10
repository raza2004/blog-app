import Navbar from '../components/navbar'
import HomePageContent from '../components/HomePageContent'

export default async function Home() {
  // Fetch data directly in the Server Component
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div>
      <Navbar />
      <HomePageContent posts={posts} />
    </div>
  )
}