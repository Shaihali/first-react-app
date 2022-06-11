import { Post } from '../Post/Post'
import './ContentBlock.css'
import { useState } from 'react'
import { AddPost } from '../Post/AddPost/AddPost'
import { EditForm } from '../Post/EditPost/EditForm'



export const ContentBlock = ({posts, setPosts}) => {

    
    const [blogPost, setBlogPost] = useState(
        JSON.parse(localStorage.getItem("blogPost")) || posts)
        

    const localStorageFunc = (updatedPost) => {
            localStorage.setItem("blogPost", JSON.stringify(updatedPost))
        }



    const deletePost = (postId) => {
        const isDelete = window.confirm("Удалить пост?") 
    
        if(isDelete) {
            const updatedPost = blogPost.filter((post) => {
                return post.id !== postId
            })  
            localStorageFunc(updatedPost)
            setBlogPost(updatedPost)
        }
             
    }

    const [showAddNewPost, setShowAddNewPost] = useState(false)

    const handShowAddNewPost = () => {
        setShowAddNewPost(true) 
    }

    const [selectedPost, setSelectedPost] = useState({})
    const [showEditPost, setShowEditPost] = useState(false)

    const selectPost = (pos) => {
        setSelectedPost(blogPost[pos])
        setShowEditPost(true) 
    }

     

    return (
        <section className="section-block">
            <div className="section-block__upper">
                <h2>Posts</h2>
                <button onClick={handShowAddNewPost}>
                    Создать пост
                </button>
                <div className="find-block">
                    <input type="text" placeholder="Найти"></input>
                </div>
            </div>
            <div className="article-block">
                { blogPost.map((key, pos) => {
                    
                    return (
                        <Post  
                            img={key.avatar}
                            title={key.title} 
                            text={key.description}
                            liked = {key.liked}
                            posts = {key}
                            deletePost = {() => deletePost(key.id)}
                            selectPost = {()=> selectPost(pos)}
                            key={key.id}
                        />
                        )
                    })
                }
            </div>
            {showAddNewPost && <AddPost 
                                    localStorageFunc={localStorageFunc} 
                                    blogPost={blogPost} 
                                    setBlogPost={setBlogPost} 
                                    setShowAddNewPost={setShowAddNewPost}/>}
            {showEditPost && <EditForm
                                setShowEditPost={setShowEditPost}
                                selectedPost={selectedPost}
                                blogPost={blogPost}
                                setBlogPost={setBlogPost}
                                localStorageFunc={localStorageFunc}/>}
        </section>
    )
}

