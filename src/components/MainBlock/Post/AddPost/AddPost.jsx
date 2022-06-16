import { useState } from "react"
import "./AddPost.css"
import { POSTS_URL } from '../../../utils/constants'
import { useRef } from "react"


export const AddPost = ( {setShowAddNewPost, blogPost, setBlogPost} ) => {

    const [postTitle, setPostTitle] = useState("")
    const [postDesc, setPostDesc] = useState("")

    const handChangeTitlePost = (e) => {
        setPostTitle(e.target.value)
    }
    const handChangeDescPost = (e) => {
        setPostDesc(e.target.value)
    }




    const createPost = async (e) => {
        e.preventDefault()

        const newPost = {
            title: postTitle,
            description: postDesc,
            liked: false,
        }

        const response = await fetch(POSTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        
        if (response.ok) {
            setBlogPost([...blogPost, await response.json()])
        } else {
            console.log(new Error(response.status))
        }
        
        setShowAddNewPost(false)
    }

    return (
        <>
            <form className="addPost" onSubmit={createPost}>
                <h2>Создание поста</h2>
                <div className="addPost__item">
                    <input 
                        placeholder="Заголовок поста"
                        type="text"
                        required 
                        value={postTitle}
                        onChange={handChangeTitlePost}>
                    </input>
                    <textarea 
                        rows={10}
                        placeholder="Описание поста"
                        required 
                        value={postDesc}
                        onChange={handChangeDescPost}>
                    </textarea>
                </div>
                <button className="addPost__btn">
                    Добавить пост
                </button>
            </form>
            <div className="overlay" onClick={() => setShowAddNewPost(false)}></div>
        </>
        
    )
}