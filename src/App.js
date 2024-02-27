import React, { useState, useEffect } from 'react';

function App() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="App">
      <h1>Hora actual:</h1>
      <p>{hora.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;

