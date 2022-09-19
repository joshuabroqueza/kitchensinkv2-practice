import "./App.css";
import ButtonClick from "./Components/ButtonClick";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">This are modules</header>
      <div className="container">
        <ButtonClick />
        <hr></hr>
        <Form />
      </div>
    </div>
  );
}

export default App;
