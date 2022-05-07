import { useRef } from 'react'
import './Form.css'

export const Form = ({setIsLoggedIn}) => {

    const loginRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = () => {
       
        const userData = {
            login: loginRef.current.value,
            password: passwordRef.current.value
        }

        localStorage.setItem("loginIn", true)

        setIsLoggedIn(true)
    }
    

    

    return (
        <>
            <form onSubmit={handleSubmit} className="form-block" >
                <h2>Вход</h2>
                <div className="form-block__item">
                    <input className="form-block__area" type="text" placeholder="Логин" ref={loginRef}></input>
                </div>
                <div className="form-block__item">
                    <input className="form-block__area" type="password" placeholder="Пароль" ref={passwordRef}></input>
                </div>
                <button className="form-block__area" type="submit">Войти</button>
            </form>
        </>
    )
}