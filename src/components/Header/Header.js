import './Header.css'

export const Header = ({btn}) => {
  return (
    <header className="header-block">
      <h1>Blog page</h1>
      <div className="header-block__item">
        <span>Шайхали,</span> 
        <button onClick={()=>{btn(true)}}>Выход</button>
      </div>
    </header>
  )
}