import React, { useState } from 'react'
import "./EditForm.css"
import { useEffect } from 'react';

export const EditForm = ({ setShowEditPost, selectedPost, blogPost, setBlogPost, localStorageFunc }) => {

    const [postTitle, setPostTitle] = useState(selectedPost.title)
    const [postDesc, setPostDesc] = useState(selectedPost.description)
    
    useEffect(()=> {
        
        const handleEscape = (e) => {
            if (e.key === "Escape") setShowEditPost(false)
            }

        window.addEventListener("keyup", handleEscape)

        return () => window.removeEventListener("keyup", handleEscape)
    })

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
            description: postDesc,
        }
        

        const updatePost = blogPost.map((post) => {
            if(post.id === updatedPost.id) return updatedPost
            return post
            
        })
        setBlogPost(updatePost)
        localStorageFunc(updatePost)
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