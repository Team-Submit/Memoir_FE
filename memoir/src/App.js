import "./App.css";
import Main from "./page/main";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
