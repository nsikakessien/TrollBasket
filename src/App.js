import { openRoutes } from "./router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {openRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={route.component}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
