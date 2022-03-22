import { Header } from './components/Header/Header'
import { MainBlock } from './components/MainBlock/MainBlock';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { SideBar } from './components/SideBar/SideBar';
import { Form } from './components/Form/Form';
import { useState } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  return (
    <div className='App'>
      { isLoggedIn ? (
          <Form btn={setIsLoggedIn}/>
        ): (
          <>
            <div className='side-bar'>
              <SideBar />
            </div>
            <div className='content-block'>
              {/* <Header btn={setIsLoggedIn}/> */}
              <MainBlock />
              {/* <Footer /> */}
            </div>
          </>
        )
      }
     </div>
  );
}

export default App;
