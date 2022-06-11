import placeholder from '../ContentBlock/placeholder.png'
import "./Post.css"
import { ReactComponent as TrashIcon } from "../../Icons/trash.svg"
import { ReactComponent as EditPencil } from "../../Icons/edit.svg"
import { ReactComponent as LikeIcon } from "../../Icons/like.svg"
import { POSTS_URL } from '../../utils/constants'


export const Post = ({img, title, text, liked, deletePost, selectPost, posts}) => {

    const like = (post) => {
       const updatedPost = {...post, liked: !post.liked}

        fetch(POSTS_URL + post.id, {
           method: "PUT",
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(updatedPost)
       })
      
    }



    return (
        <article>
            <div className="article-img">
                <img  src={img ? img : placeholder}></img>
            </div>
            <h3>{title}</h3>
            <p>{text.length > 150 ? (
            <>
                {text.slice(0, 151)}
                ...<button>Подробнее</button>
            </>
            ) : text}</p>
           
                    <div className='action'>
                        <button className='likePost' 
                                onClick={() => like(posts)}>
                            <LikeIcon fill = {liked ? "red": "black"}/>
                        </button>
                        <button className='deletePost' onClick={deletePost}>
                            <TrashIcon/>
                        </button>
                        <button className='editPosts' onClick={selectPost}>
                            <EditPencil/>
                        </button>
                    </div>
            
            
                
        </article>
    )
    
}
 