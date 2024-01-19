// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import Header from "./Header";
import Main from "./Sort";
import Footer from "./Footer";

function App() {
  const [list, setList] = useState([]);

  function handleAddList(data) {
    setList((list) => [...list, data]);
  }

  function handleChecked(id) {
    setList((list) =>
      list.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  }

  return (
    <div>
      <Header onAddItem={handleAddList} list={list} />
      {list.length > 0 && (
        <Main list={list} onCheck={handleChecked} setList={setList} />
      )}
      <Footer list={list} />
    </div>
  );
}

export default App;
