import Home from "./routes/home/home";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";
import SignIn from "./routes/sign-in/sign-in";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
