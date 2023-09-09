import { Route, Routes } from "react-router-dom";
import { Home } from "./ui";
import Layout from "./components/layout";
import Build from "./ui/build";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
