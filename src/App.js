import "./App.css";
import { useState } from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <main className="page">
        <button className="page__open-btn" onClick={() => setModalActive(true)}>
          Налоговый вычет
        </button>
        <Modal active={modalActive} setActive={setModalActive}></Modal>
      </main>
    </div>
  );
}

export default App;
