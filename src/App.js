

import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import './App.css';



function App() {

  async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BJreJiwAjMTdTscOghg9Fyntp4nzpoEIsFG2wqX6IlFKw7qBH1f84q93hI5fLd4QTOJep8159vRPMi-8u1oWMLg'
    })
    console.log(JSON.stringify(push));
  }

  return (
      <div className="App">
        <button onClick={subscribe}>Subscribe to push messages</button>
      </div>
  );
}

export default App;
