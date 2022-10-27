import "./App.css";
import { Routes, Route } from "react-router-dom";
import { gapi, loadAuth2 } from "gapi-script";
import Login from "./Components/Login";
import ParentsContainer from "./Components/ParentsContainer";
import ParentsContainersLecture from "./Components/ParentsContainersLecture";
import ParentsContainerSubscribe from "./Components/ParentsContainerSubscribe";
import { useEffect, useState } from "react";
import { contexteUse } from "./Components/UseContexte";
import ParentsWatchSubscribe from "./Components/ParentsWatchSubscribe";
import ParentsFilterSearch from "./Components/ParentsFilterSearch";

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
            path="/ParentsContainer"
            element={<ParentsContainer />}
          ></Route>
          <Route
            path="/ParentsContainersLecture/:lecture"
            element={<ParentsContainersLecture />}
          />
          <Route
            path="/ParentsContainerSubscribe"
            element={<ParentsContainerSubscribe />}
          ></Route>
          <Route
            path="/ParentsWatchSubscribe/:channelId"
            element={<ParentsWatchSubscribe />}
          ></Route>
          <Route
            path="/ParentsFilterSearch:searchWord"
            element={<ParentsFilterSearch />}
          ></Route>
        </Routes>
      </div>
    </contexteUse.Provider>
  );
}

export default App;
