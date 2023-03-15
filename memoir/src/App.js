import "./App.css";
import Main from "./page/main";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/login";
import Signup from "./page/signup";
import Mypage from "./page/mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="mypage" element={<Mypage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
