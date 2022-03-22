import { Article } from '../Article/Article'

import './Section1.css'
import image from '../img/post_img.jpg'



export const Section = () => {

    const articleObj = {
        img: image,
        title: "Title",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias est vitae cum, ea numquam error hic, rerum dolore maxime dolores sit voluptate iure aperiam qui deserunt tenetur iste reiciendis doloremque!",
        width: "250px",
        height: "150px",
        text2: "the ich the randon bra terranoba this teer muyer the ich the randon bra terranoba this teer muyer"
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
                <Article  title={articleObj.title + 1} text={articleObj.text} height={articleObj.height} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 2} text={articleObj.text} height={articleObj.height} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 3} text={articleObj.text} height={articleObj.height} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 4} text={articleObj.text} height={articleObj.height} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 5} text={articleObj.text} height={articleObj.height} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 6} text={articleObj.text2} height={articleObj.height} width={articleObj.width}/>
            </div>
        </section>
    )
}

