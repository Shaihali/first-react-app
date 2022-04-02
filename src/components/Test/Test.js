import { createRef, useState } from "react"

// export const Test = () => {
// /*Неуправляемые компоненты, данные из формы собирается в объект и отправляется на сервер в json формате*/
//     const emailRef = createRef()
//     const passwordRef = createRef()

//     const handleSubmit = (e)=> {
//         e.preventDefault()
        
//         const userData = {
//             email: emailRef.current.value,
//             password: passwordRef.current.value
//         }
//         console.log(userData)
//         fetch("url", {
//             method: "post",
//             body: JSON.stringify(userData)
//         })
//     }


//     return (
//         <div className="test">
//             <form action="" onSubmit={handleSubmit}>
//                 <input type = "email" ref={emailRef}></input>
//                 <input type = "password" ref={passwordRef}></input>
//                 <button type ="submit">Зарегистрироваться</button>
//             </form>
//         </div>
//     )
// }

export const Test = () => {
    /*Управляемые компоненты*/
     const [emailValue, setEmailValue] = useState()
     const [passValue, setPassValue] = useState()
     const [selectValue, setSelectValue] = useState("1")

     const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
     }
     const handlePassChange = (e) => {
        setPassValue(e.target.value)
     }


     const handleSelectChange = (e) => {
        setSelectValue(e.target.value)
     }
     const selectArray = ["Первый", "Второй", "Третий"]
     const createSelect = selectArray.map((elem, index)=> {
        return (
            <option value={index}>{elem}</option>
        )
    })
    console.log(selectArray)

    return (
        <div className="test">
            <form action="" onSubmit={(e)=> {e.preventDefault()}}>
                <input type = "email" value = {emailValue} onChange={handleEmailChange}></input>
                <input type = "password" value = {passValue} onChange={handlePassChange}></input>
                <div>
                    <select value={selectValue} onChange={handleSelectChange}>
                        {createSelect}
                    </select>
                </div>
                <button type ="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}