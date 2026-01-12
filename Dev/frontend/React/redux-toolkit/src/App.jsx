import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import PrivacyComponent from "./components/PrivacyComponent";

function App() {
  const privacy = useSelector((state) => state.privacy);

  return (
    <>
      <Container>
        <Header />
        {privacy ? <PrivacyComponent /> : <DisplayCounter />}
        <Controls />
      </Container>
    </>
  );
}

export default App;
