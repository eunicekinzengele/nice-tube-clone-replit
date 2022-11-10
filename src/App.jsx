import "./App.css";
import { Routes, Route } from "react-router-dom";
import { gapi, loadAuth2 } from "gapi-script";
import Login from "./Components/Login";
import ParentsCardPopular from "./Components/Pages/ParentsCardPopular";
import ParentsCardChannel from "./Components/Pages/DisplayOfSubscribedChannels"
import ParentsCardChannelVideo from "./Components/Pages/ParentsCardChannelVideo"
import ParentsCardSearchResult from "./Components/Pages/ParentsCardSearchResult"
import ParentsCardWatchVideo from "./Components/Pages/ParentsCardWatchVideo"
import { useEffect, useState } from "react";
import { contexteUse } from "./Components/Contextes/UseContexte";
import Loader from "./Components/Loader";
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
            path="/ParentsCardPopular"
            element={<ParentsCardPopular />}
          ></Route>
          <Route
            path="/ParentsCardWatchVideo/:lecture"
            element={<ParentsCardWatchVideo />}
          />
          <Route
            path="/ParentsCardChannel"
            element={<ParentsCardChannel />}
          ></Route>
          <Route
            path="/ParentsCardChannelVideo/:channelId"
            element={<ParentsCardChannelVideo />}
          ></Route>
          <Route
            path="/ParentsCardSearchResult:searchWord"
            element={<ParentsCardSearchResult />}
          ></Route>
          <Route 
            path="/loader" 
            element={<Loader />}>
          </Route>
        </Routes>
      </div>
    </contexteUse.Provider>
  );
}

export default App;
