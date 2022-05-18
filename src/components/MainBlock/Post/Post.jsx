import { Icons } from '../../Icons/Icons'
import placeholder from '../ContentBlock/placeholder.png'
import "./Post.css"
import { useState } from 'react'
import { ReactComponent as TrashIcon } from "../../Icons/trash.svg"
import { ReactComponent as EditPencil } from "../../Icons/edit.svg"


export const Post = ({img, title, text, like, liked, deletePost, selectPost}) => {

    const customFilling = liked ? "crimson" : "black"

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
                <Icons color={customFilling} like={like}/>
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
 