import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import { routes } from './routes/routes';

function App() {
  return (
      <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
      </Routes>
  );
}

export default App;
