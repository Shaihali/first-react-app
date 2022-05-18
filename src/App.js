import { Header } from './components/Header/Header'
import { MainBlock } from './components/MainBlock/MainBlock';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { SideBar } from './components/SideBar/SideBar';
import { Form } from './components/Form/Form';
import { useState } from 'react'
import { Test } from './components/Test/Test';
import { Test2 } from './components/Test/Test2';
import { useEffect } from 'react';
import { POSTS_URL } from './components/utils/constants';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loginIn") === "true")
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(()=> {
    setIsLoading(true)
    const fetchPosts = async () => {
      const response = await fetch(POSTS_URL)
      const json = await response.json()
      setPosts(json)
      setIsLoading(false)
    }
    fetchPosts()
  }, [])
  
  return (
    <div className='App'>
      { !isLoggedIn ? (
          <Form setIsLoggedIn={setIsLoggedIn}/>
        ): 
          <>
          { isLoading ? ( 
            <h1>Загружаем....</h1>
          ): 
          <>
            <div className='side-bar'>  
            <SideBar setIsLoggedIn={setIsLoggedIn}/>
            </div>
            <div className='content-block'>
              {/* <Header btn={setIsLoggedIn}/> */}
              <MainBlock posts={posts} setPosts={setPosts}/>
              {/* <Footer /> */}
            </div>
          </>
          }
          </> 
      }
      {/* <Test /> */}
      {/* <Test2 /> */}
     </div>
  );
}

export default App;
