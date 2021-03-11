import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* app body */}
        {/* sidebar */}
        {/* feed */}
      </div>
    </div>
  );
}

export default App;
