import { Icons } from '../../Icons/Icons'
import placeholder from '../Section1/placeholder.png'
import "./Article.css"
import { useState } from 'react'


export const Article = ({img, width, height, title, text}) => {

    const [liked, setLike] = useState(true)
    const color = liked ? "#000" : "#ff2400"
    const changeLike = () => setLike(!liked)

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
                <Icons color={color} btn={changeLike}/>
        </article>
    )
    
}
 