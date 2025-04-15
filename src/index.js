import React from 'react';
import ReactDOM from 'react-dom';

const jsx = (
  <div>
    <span>React JSX</span>
  </div>
)

// function App() {
//   return (
//     <div>
//       <Child />
//     </div>
//   )
// }

// function Child() {
//   return (
//     <div>child</div>
//   )
// }

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(jsx)

// console.log("🚀 ~ jsx:", jsx)
// console.log("🚀 ~ React:", React)
// console.log("🚀 ~ ReactDOM:", ReactDOM)

