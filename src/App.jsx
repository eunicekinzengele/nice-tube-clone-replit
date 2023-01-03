import "./App.css";
import { Routes, Route } from "react-router-dom";
import { gapi, loadAuth2 } from "gapi-script";
import Login from "./Components/Login";
import PageOfPopularVideo from "./Components/Pages/PageOfPopularVideo";
import PageOfSubscribedChannels from "./Components/Pages/PageOfSubscribedChannels";
import PageOfVideoSubscribed from "./Components/Pages/PageOfVideoSubscribed";
import PageOfSearchResults from "./Components/Pages/PageOfSearchResults";
import PageOfVideoPlayback from "./Components/Pages/PageOfVideoPlayback";
import PageOfProfil from "./Components/Pages/PageOfProfil";
import { useEffect, useState } from "react";
import { contexteUse } from "./Components/Contextes/UseContexte";
import Loader from "./Components/Loader";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:3000")
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [token, setToken] = useState("");

  const clientId =
    "129788055226-glev0dl084clkeph94jhapm27uhc8tck.apps.googleusercontent.com";

  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(
        gapi,
        clientId,
        "https://www.googleapis.com/auth/youtube"
      );
      window.auth2 = auth2;
      console.log("<here ", auth2.isSignedIn.get());
      if (auth2.isSignedIn.get()) {
        const userToken = auth2.currentUser.get();
        setToken(userToken.xc.access_token);
      }
    };
    setAuth2();
  }, []);

  return (
    <contexteUse.Provider value={{ token, setToken }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/PageOfPopularVideo"
            element={<PageOfPopularVideo />}
          ></Route>
          <Route
            path="/PageOfVideoPlayback/:lecture"
            element={<PageOfVideoPlayback />}
          />
          <Route
            path="/PageOfSubscribedChannels"
            element={<PageOfSubscribedChannels />}
          ></Route>
          <Route
            path="/PageOfVideoSubscribed/:channelId"
            element={<PageOfVideoSubscribed />}
          ></Route>
          <Route
            path="/PageOfSearchResults:searchWord"
            element={<PageOfSearchResults />}
          ></Route>
          <Route 
            path="/PageOfProfil" 
            element={<PageOfProfil />}
            ></Route>
          <Route path="/loader" element={<Loader />}></Route>
        </Routes>
      </div>
    </contexteUse.Provider>
  );
}

export default App;
