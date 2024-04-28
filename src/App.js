import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import './index.css';
import { base_url } from "./utils/constant";
// import { IPInfoContext } from "ip-info-react";

function App() {
  // const useInfo = useContext(IPInfoContext);
  // const [isReload, setIsReload] = useState(false);
  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');

  const [ipdetils, setIpDetils] = useState({});


  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const jsonData = await response.json();
        setIpAddress(jsonData.ip);
      } catch (error) {
        return;
        // console.error('Error fetching IP address:', error);
      }
    };

    fetchIPAddress();
  }, []);
  

  useEffect(()=>{
    if(ipAddress){
      Handel_ip_address(ipAddress);
    }
  },[ipAddress]);

  async function Handel_ip_address(ip){
    try{
      const response = await fetch(`${base_url}/ip/add`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        ip
        }),
      });
      const jsonData = await response.json();
      // console.log(jsonData);
      setIpDetils(jsonData.ipDetails);
      // console.log(jsonData.ipDetails);
    }catch(err){
      return;
    }
  }


  return (
    <div className="App h-[100vh] w-full ">
      <div className="navbar h-[10vh] w-full fixed top-0 "><Navbar /></div>
      <main className="pt-[10vh] h-[90vh overflow-y-scroll bg-[#1a1a1a] text-white" style={{scrollbars : 'hidden'}}>
        
        {/* Home Section */}
        <div  id='Home'  className="Home w-full p-[10px] bg-fixed bg-[url('https://e0.pxfuel.com/wallpapers/149/259/desktop-wallpaper-web-development.jpg')] bg-cover bg-center">
          <Home ipAddress={ipAddress} ipdetils={ipdetils} setIpDetils={setIpDetils}/>
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

        {/* Projects Section */}
        <div id="Projects" className="w-full pt-10 p-[10px]">
          <Projects />
        </div>

        {/* Educations Section */}
        <div id="Education" className="w-full pt-10 p-[10px]">
          <Education />
        </div>

        {/* Contact Section */}
        <div id="Contact" className="w-full pt-10 p-[10px] pb-14">
          <Contact />
        </div>

        {/* Footer Section */}
        <Footer />

      </main>
    </div>
  );
}

export default App;
