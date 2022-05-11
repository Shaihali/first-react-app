import React, { useState } from 'react'
import "./EditForm.css"

export const EditForm = ({ setShowEditPost, selectedPost, blogPost, setBlogPost, localStorageFunc }) => {

    const [postTitle, setPostTitle] = useState(selectedPost.title)
    const [postDesc, setPostDesc] = useState(selectedPost.text)

    const handChangeTitlePost = (e) => {
        setPostTitle(e.target.value)
    }
    const handChangeDescPost = (e) => {
        setPostDesc(e.target.value)
    }

    const editPost = (e) => {
        e.preventDefault()

        const updatedPost = {
            ...selectedPost,
            title: postTitle,
            text: postDesc,
        }
        console.log(updatedPost)

        const updatePost = blogPost.map((post) => {
            if(post.title === updatedPost.title) return updatedPost
            return post
        })
        setBlogPost(updatePost)
        localStorageFunc(updatedPost)
        setShowEditPost(false)
        
    }
    
    return (
        <>
            <form className="editPost" onSubmit={editPost}>
                <h2>Редактирование поста</h2>
                <div className="editPost__item">
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
                <button className="editPost__btn">
                    Сохранить и Закрыть
                </button>
            </form>
            <div className="overlay" onClick={() => setShowEditPost(false)}></div>
        </>
    )
}