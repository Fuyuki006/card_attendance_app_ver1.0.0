import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import TagWallPage from "./components/pages/TagWallPage";
import Login from "./components/pages/LoginPage";
import { useAppSelector } from "./store/store";
import TestPage from "./components/pages/TestPage";
import Registration from "./components/pages/RegistrationPage";

function App() {
  const tagWallRowValue = useAppSelector(
    (state: any) => state.tagWallValue.row
  );
  const tagWallColumnValue = useAppSelector(
    (state: any) => state.tagWallValue.column
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route
            path="/tagwall"
            element={
              <TagWallPage
                tagWallRowValue={tagWallRowValue}
                tagWallColumnValue={tagWallColumnValue}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Reactの練習</h1>
      <MyPractice
        initialMessage="ボタンを押してください。"
        clickedMessage="ボタンが押されました！"
        buttonLabel="ボタン"
      />
      <MyPractice
        initialMessage="スイッチを押して！"
        clickedMessage="スイッチが押された！"
        buttonLabel="スイッチ"
      /> */}
    </div>
  );
}

export default App;
