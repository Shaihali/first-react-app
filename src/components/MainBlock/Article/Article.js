import { Icons } from '../../Icons/Icons'
import placeholder from '../Section1/placeholder.png'
import "./Article.css"
import { useState } from 'react'


export const Article = ({img, width, height, title, text, like, liked}) => {

    const customFilling = liked ? "crimson" : "black"

    return (
        <article>
            <img src={img ? img : placeholder} width={width} height={height}></img>
            <h3>{title}</h3>
            <p>{text.length > 150 ? (
            <>
                {text.slice(0, 151)}
                ...<button>Подробнее</button>
            </>
            ) : text}</p>
                <Icons color={customFilling} like={like}/>
        </article>
    )
    
}
 