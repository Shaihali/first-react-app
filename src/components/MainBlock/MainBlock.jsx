import './MainBlock.css'
import { ContentBlock } from './ContentBlock/ContentBlock'

export const MainBlock = ({posts, setPosts}) => {
  
  return (
    <main className="main-block">
      <ContentBlock posts={posts} setPosts={setPosts}/>
    </main>
  )
}