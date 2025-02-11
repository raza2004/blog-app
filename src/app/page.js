import Navbar from '../components/navbar'
import BottomBar from '../components/BottomBar'
import HomePageContent from '../components/HomePageContent'

export default async function Home() {
  // Fetch data directly in the Server Component
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div className='relative h-auto '>
      <Navbar />
      <HomePageContent posts={posts} />
      
      <BottomBar />
    
    </div>
  )
}