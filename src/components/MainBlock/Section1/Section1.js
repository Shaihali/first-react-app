import { Article } from '../Article/Article'
import placegolder from './placeholder.png'
import './Section1.css'



export const Section = () => {

    const articleObj = {
        img: placegolder,
        title: "Title",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias est vitae cum, ea numquam error hic, rerum dolore maxime dolores sit voluptate iure aperiam qui deserunt tenetur iste reiciendis doloremque!",
        width: "200px"
    }
    
    return (
        <section className="section-block">
            <h2>Posts</h2>
            <div className="article-block">
                <Article img={articleObj.img} title={articleObj.title + 1} text={articleObj.text} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 2} text={articleObj.text} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 3} text={articleObj.text} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 4} text={articleObj.text} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 5} text={articleObj.text} width={articleObj.width}/>
                <Article img={articleObj.img} title={articleObj.title + 6} text={articleObj.text} width={articleObj.width}/>
            </div>
        </section>
    )
}

