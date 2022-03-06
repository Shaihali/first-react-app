import './Footer.css'
export const Footer = () => {
    const footerObj = {
        text: "Footer",
        date: new Date().getFullYear(),
        bgColor: "#01b0ef",
        flex: 1
    }
    return (
        <footer className="footer-block">
            <div style={{background: footerObj.bgColor, flex: footerObj.flex}}></div>
            <div className="footer-block__date">{`${footerObj.text} - ${footerObj.date}`}</div>
            <div style={{background: footerObj.bgColor, flex: footerObj.flex}}></div>
        </footer>
    )
}