import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-spp8057zfmej1qlr.us.auth0.com"
     clientId="MCxfawfBW6x8suqFITPhkFB10jwdaqKE"
     authorizationParams={{
      redirect_uri: "https://mtaamall.vercel.app"
     }}
     audience="https://mtaamallserver.vercel.app"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
