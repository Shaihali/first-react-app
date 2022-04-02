import { Article } from '../Article/Article'

import './Section1.css'
import image from '../img/post_img.jpg'
import { useState } from 'react'



export const Section = () => {

    const articleObj = [
        {
            img: image,
            Liked: false,
            title: "Title",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias est vitae cum, ea numquam error hic, rerum dolore maxime dolores sit voluptate iure aperiam qui deserunt tenetur iste reiciendis doloremque!",
            width: "250px",
            height: "150px",
            text2: "the ich the randon bra terranoba this teer muyer the ich the randon bra terranoba this teer muyer"
        },
        {
            img: image,
            Liked: false,
            title: "Title 2",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias est vitae cum, ea numquam error hic, rerum dolore maxime dolores sit voluptate iure aperiam qui deserunt tenetur iste reiciendis doloremque!",
            width: "250px",
            height: "150px",
            text2: "the ich the randon bra terranoba this teer muyer the ich the randon bra terranoba this teer muyer"
            },
        {
            // img: image,
            Liked: false,
            title: "Title 3",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias est vitae cum, ea numquam error hic, rerum dolore maxime dolores sit voluptate iure aperiam qui deserunt tenetur iste reiciendis doloremque!",
            width: "250px",
            height: "150px",
            text2: "the ich the randon bra terranoba this teer muyer the ich the randon bra terranoba this teer muyer"
        },
]

    const [blogPost, setBlogPost] = useState(
        JSON.parse(localStorage.getItem("like")) || articleObj)

    const like = (pos) => {
        const updateArticleObj = [...blogPost]

        updateArticleObj[pos].Liked = !updateArticleObj[pos].Liked
        localStorage.setItem("like", JSON.stringify(updateArticleObj))

        setBlogPost(updateArticleObj)
    }
    
    return (
        <section className="section-block">
            <div className="section-block__upper">
                <h2>Posts</h2>
                <div className="find-block">
                    <input type="text" placeholder="Найти"></input>
                </div>
            </div>
            <div className="article-block">
                {
                blogPost.map((key, pos) => {
                    return (
                        <Article  
                            img={key.img}
                            title={key.title} 
                            text={key.text} 
                            height={key.height} 
                            width={key.width}
                            liked = {key.Liked}
                            like = {()=> like(pos)}
                            key={key.title}
                        />
                        )
                    })
                }
            </div>
        </section>
    )
}

