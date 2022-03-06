import './MainBlock.css'
import bg from './bg.jpg'
import { Section } from './Section1/Section1'

export const MainBlock = () => {
  const image = {
    img: bg,
    alt: "главное фото"
  }
  return (
    <main className="main-block">
      <div className="divv">
        <img className="main-block__img" src={image.img} alt={image.alt}></img>
      </div>
      <Section />
    </main>
  )
}