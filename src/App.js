import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

//Components
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"app"}
          leftChild={
            <MyButton
              text={"왼쪽버튼"}
              onClick={() => {
                alert("왼쪽 헤더 버튼");
              }}
            />
          }
          rightChild={
            <MyButton
              text={"오른쪽버튼"}
              onClick={() => {
                alert("오른쪽 헤더 버튼");
              }}
            />
          }
        />
        <h2>HI</h2>
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼!!!");
          }}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => {
            alert("버튼!!!");
          }}
          type={"negative"}
        />
        {/* <img src={process.env.PUBLIC_URL + "/assets/emotion1.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/emotion2.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/emotion3.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/emotion4.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/assets/emotion5.png"} alt="" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
