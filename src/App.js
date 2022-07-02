import Home from "./pages/Home";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import AuthenticateRoutes from "./AuthenticateRoutes";

function App() {
  const { isUserLoggedIn } = useContext(UserContext);
  return (
    <div className="App">
      {isUserLoggedIn ? <AppRoutes /> : <AuthenticateRoutes />}
    </div>
  );
}

export default App;
