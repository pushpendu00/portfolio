import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import './index.css';

function App() {
  return (
    <div className="App h-[100vh] w-full absolute">
      <div className="navbar h-[10vh] sticky top-0 "><Navbar /></div>
      <main className="h-[90vh overflow-y-scroll" style={{scrollbars : 'hidden'}}>
        <div  id='Home'  className="Home w-full p-[10px] bg-fixed bg-[url('https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg')] bg-cover bg-center">
          <Home />
        </div>
        <div id="About" className="w-full p-[10px] bg-[#1a1a1a] text-white">
            <About />
        </div>
      </main>
    </div>
  );
}

export default App;
