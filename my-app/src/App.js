import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import './index.css';

function App() {
  return (
    <div className="App h-[100vh] w-full ">
      <div className="navbar h-[10vh] w-full fixed top-0 "><Navbar /></div>
      <main className="pt-[10vh] h-[90vh overflow-y-scroll bg-[#1a1a1a] text-white" style={{scrollbars : 'hidden'}}>
        
        {/* Home Section */}
        <div  id='Home'  className="Home w-full p-[10px] bg-fixed bg-[url('https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg')] bg-cover bg-center">
          <Home />
        </div>

        {/* Aboute Section */}
        <div id="About" className="w-full pt-10 p-[10px]">
            <About />
        </div>

        {/* Skills Section */}
        <div id="Skills" className="w-full pt-10 p-[10px]">
          <Skills />
        </div>

        {/* Work Section */}
        <div id="Work" className="w-full pt-10 p-[10px]">
          <Work />
        </div>

      </main>
    </div>
  );
}

export default App;
