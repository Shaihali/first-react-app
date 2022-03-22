import './Form.css'

export const Form = ({btn}) => {
    return (
        <>
            <form className="form-block">
                <h2>Вход</h2>
                <div className="form-block__item">
                    <input className="form-block__area" type="text" placeholder="Логин"></input>
                </div>
                <div className="form-block__item">
                    <input className="form-block__area" type="password" placeholder="Пароль"></input>
                </div>
                <button className="form-block__area" onClick={()=>{btn(false)}}>Войти</button>
            </form>
        </>
    )
}