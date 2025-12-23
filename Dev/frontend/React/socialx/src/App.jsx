import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [selectedTab, setSelectedTab] = useState("Friends");

  return (
    <>
      <div className="app-Container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="content">
          <Header />
          {selectedTab === "Home" && <PostList />}
          {selectedTab === "Create Post" && <CreatePost />}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
