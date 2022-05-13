import './Footer.css'


export const Footer = () => {
    const footerObj = {
        text: "Footer",
        date: new Date().getFullYear(),
    }

    return (
        <footer className="footer-block">
            <div className="footer-block__item"></div>
            <div className="footer-block__date">{`${footerObj.text} - ${footerObj.date}`}</div>
            <div className="footer-block__item"></div>
        </footer>
    )
}