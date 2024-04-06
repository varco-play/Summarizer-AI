import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
        <h5 className="text-xs text-gray-500 relative bottom-0 mt-40">Was created by Sarvar (Software Engineer)</h5>
      </div>
    </main>
  );
};

export default App;
