
import Portfolio from "./Pages/Portfolio";
import WelcomePage from "./Pages/WelcomePage";
import Summary from "./Pages/Summary";
import Community from "./Pages/Community";
import Contact from "./Pages/Contact";
import ContactForm from "./Pages/ContactForm";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";



function App() {
  return (
    <div className="bg-black  w-full h-full">
      <Header/>
   <Routes>
 <Route path='/' element={ <WelcomePage/>}  />
 <Route path='/portfolio' element={ <Portfolio/>}  />
 <Route path='/journey' element={ <Summary/>}  />
 <Route path='/community' element={ <Community/>}  />
 <Route path='/contact' element={ <Contact/>}  />
 <Route path='/contact-form' element={ <ContactForm/>}  />
</Routes>

   
 
   
   
        </div>
  );
}
export default App;
