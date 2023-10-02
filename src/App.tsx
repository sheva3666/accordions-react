import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Links from "./components/Links/Links";
import { Sidebar } from "./components/SideBar/SideBar";
import { routes } from './routes/routes';

function App() {
  return (
    <div className="App">
    <Sidebar/>
      <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
      </Routes>
    </div>
  );
}

export default App;
