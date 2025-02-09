import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex/*" element={<Dex />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
