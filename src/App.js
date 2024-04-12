import "./styles.css";
import Page from "./components/Page";
import Sidebar from "./components/Sidebar";

import FieldProvider from "./context/fieldsContext";
import { Outlet } from "react-router";

function App() {
  return (
    <div className={`App`}>
      <FieldProvider>
        <Page />
        <Outlet />
        <Sidebar />
      </FieldProvider>
    </div>
  );
}

export default App;
