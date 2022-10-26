// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import Container from './Components/Container';
import SingleVideo from './Components/SingleVideo';
import Lecture from './Components/Lecture';
import {Routes, Route} from "react-router-dom";
import { gapi, loadAuth2 } from "gapi-script";
import Login from './Components/Login';
// import UseCard from './Components/UserCard';
import ParentsContainer from './Components/ParentsContainer';
import ParentsContainersLecture from './Components/ParentsContainersLecture';
import ParentsContainerSubscribe from './Components/ParentsContainerSubscribe';
import { useEffect, useState } from 'react';
import {contexteUse} from './Components/UseContexte';
import ParentsWatchSubscribe from './Components/ParentsWatchSubscribe'
import ParentsFilterSearch from './Components/ParentsFilterSearch';
import FilterSearch from './Components/FilterSearch';


function App() {
  
  const [token , setToken]= useState("");
  
  const clientId = "129788055226-glev0dl084clkeph94jhapm27uhc8tck.apps.googleusercontent.com"
  //" 202009839663-v5f9j4a2vjcttqrsabr11mjhljrn48a1.apps.googleusercontent.com";
  


  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube')
      window.auth2 = auth2
      console.log("<here ", auth2.isSignedIn.get());
      if (auth2.isSignedIn.get()) {
        const userToken= auth2.currentUser.get(); 
        setToken(userToken.xc.access_token);

      }
    }
    setAuth2();
  }, []);
 



  return (

    <contexteUse.Provider value= {{token, setToken}}>

    <div className="App">
  
    <Routes>
         <Route path='/' element={<Login/>}></Route>
        <Route path='/ParentsContainer' element={<ParentsContainer/>}></Route>
        <Route path='/ParentsContainersLecture/:lecture' element={<ParentsContainersLecture/>}/>
        <Route path='/ParentsContainerSubscribe' element={<ParentsContainerSubscribe/>}></Route>
        <Route path='/ParentsWatchSubscribe/:channelId' element={<ParentsWatchSubscribe/>}></Route>
        <Route path='/ParentsFilterSearch:searchWord' element={<ParentsFilterSearch/>}></Route>


        
      
    </Routes>

    </div>
    </contexteUse.Provider>
    
  );
}

export default App;
