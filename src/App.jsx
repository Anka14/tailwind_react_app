import { Header } from "./components/header";
import { MainSection } from "./components/main-section/main-section";
import { Wrapper } from "./components/wrapper";
import "./index.css"


function App() {
  return (
    <Wrapper >
      <Header />
      <MainSection />
    </Wrapper>
  );
}

export default App;
