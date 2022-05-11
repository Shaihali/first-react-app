import { Children } from "react"
import "./SideBar.css"

export const SideBar = ({setIsLoggedIn}) => {
    const asideObj = {
        title: "Шайхали",
        input: {
            type: "text",
            placeholder: "Найти"
            }
        }

    const asideArray = [
            {  title: "Blog", href: "#"},
            {  title: "Favorite", href: "#"},
            {  title: "Setting", href: "#"}
        ]
        

    return (
        <aside className="aside-block">
            <div className="aside-block__image">
                <div className="avatar">
                    <img  className="avatar__img" src="http://wegamers.176.com/GameIM/SNS/Image/20223537241566724780232034"></img>
                </div>
                <h3>{asideObj.title}</h3>
            </div>
            <nav className="nav-block">
                <ul className="nav-block__list">
                    { 
                        asideArray.map((obj) => {
                        return (
                            <li key={obj.title}>
                                <a href={obj.href}>{obj.title}</a>
                            </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <button onClick ={() => {
                localStorage.removeItem("loginIn")
                 setIsLoggedIn(false)}} className="aside-block__exit">ВЫХОД</button>
        </aside>
    )
} 