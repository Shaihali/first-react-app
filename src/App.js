import { Header } from './components/Header/Header'
import { MainBlock } from './components/MainBlock/MainBlock';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { SideBar } from './components/SideBar/SideBar';

function App() {

  
  return (
    <div className='App'>
      <div className='side-bar'>
        <SideBar />
      </div>
      <div className='content-block'>
        <Header />
        <MainBlock />
        <Footer />
      </div>
    </div>
  );
}

export default App;
