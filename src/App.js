import "./App.css";
import Feed from "./Feed";
import Header from "./Header";

import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* MessageSender */}
        <Feed />

        {/* iframe for widget */}
      </div>
    </div>
  );
}

export default App;
