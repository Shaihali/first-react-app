import { Header } from './components/Header/Header'
import { MainBlock } from './components/MainBlock/MainBlock';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { SideBar } from './components/SideBar/SideBar';
import { Form } from './components/Form/Form';
import { useState } from 'react'
import { Test } from './components/Test/Test';
import { Test2 } from './components/Test/Test2';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loginIn") === "true")
  
  return (
    <div className='App'>
      { !isLoggedIn ? (
          <Form setIsLoggedIn={setIsLoggedIn}/>
        ): (
          <>
            <div className='side-bar'>  
              <SideBar setIsLoggedIn={setIsLoggedIn}/>
            </div>
            <div className='content-block'>
              {/* <Header btn={setIsLoggedIn}/> */}
              <MainBlock />
              {/* <Footer /> */}
            </div>
          </>
        )
      }
      {/* <Test /> */}
      {/* <Test2 /> */}
     </div>
  );
}

export default App;
