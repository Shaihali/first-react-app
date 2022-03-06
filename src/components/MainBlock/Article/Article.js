
export const Article = (props) => {
    return (
        <article>
            <img src={props.img} width={props.width}></img>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </article>
    )
    
}
