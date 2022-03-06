import "./SideBar.css"

export const SideBar = () => {
    const asideObj = {
        title: "#App",
        input: {
            type: "text",
            placeholder: "Найти"
            },
        link1: {
           title: "Blog",
            href: "#"
            },
        link2: {
            title: "Favorite",
            href: "#"
            },
        link3: {
            title: "Setting",
            href: "#"
            },  
    }

    return (
        <aside className="aside-block">
            <h3>{asideObj.title}</h3>
            <input type={asideObj.input.type} placeholder={asideObj.input.placeholder}></input>
            <nav className="nav-block">
                <ul className="nav-block__list">
                    <li><a href={asideObj.link1.href}>{asideObj.link1.title}</a></li>
                    <li><a href={asideObj.link2.href}>{asideObj.link2.title}</a></li>
                    <li><a href={asideObj.link3.href}>{asideObj.link3.title}</a></li>
                </ul>
            </nav>
        </aside>
    )
}