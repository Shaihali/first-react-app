import { createRef, useState } from "react"

export const Test2 = () => {

    const [modalValue, setModalValue] = useState(true)

    const textRef = createRef()
    const textareaRef = createRef()

    const handleSubmit = (e)=> {
                e.preventDefault()
                setModalValue(true)
                
                const userData = {
                    text: textRef.current.value,
                    textarea: textareaRef.current.value
                }
                console.log(userData)
                fetch("url", {
                    method: "post",
                    body: JSON.stringify(userData)
                })
            }


return (
    <>
        { modalValue ? (
                <button onClick={()=> { setModalValue(false)}}> Модальное окно </button>    
            ): (
                <div style={{width:"350px", height: "250px", display: "flex", border: "1px solid black",
                flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <span onClick={() => {setModalValue(true)}}>X</span>
                    <form style={{display: "flex", flexDirection: "column", height: "120px", width: "200px"}} onSubmit={handleSubmit}>
                        <input type="text" ref={textRef} required></input>
                        <textarea style={{flexGrow: "1"} } ref={textareaRef}></textarea>
                        <button type="submit" >Добавить</button>
                    </form>
                </div>
        )}
    </>
)
}