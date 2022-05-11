import { useState } from "react"
import "./AddPost.css"


export const AddPost = ( {setShowAddNewPost, blogPost, setBlogPost, localStorageFunc} ) => {

    const [postTitle, setPostTitle] = useState("")
    const [postDesc, setPostDesc] = useState("")

    const handChangeTitlePost = (e) => {
        setPostTitle(e.target.value)
    }
    const handChangeDescPost = (e) => {
        setPostDesc(e.target.value)
    }

    const createPost = (e) => {
        e.preventDefault()

        const newPost = {
            title: postTitle,
            text: postDesc,
            Liked: false,
            width: "250px",
            height: "150px",
        }

        const updatedPost = [...blogPost, newPost]
        setBlogPost(updatedPost)
        localStorageFunc(updatedPost)
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