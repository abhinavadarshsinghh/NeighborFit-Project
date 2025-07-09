import React, { useState } from 'react';
import Form from './components/Form';
import MatchResult from './MatchResult';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">NeighborFit</h1>
      {!result ? <Form onMatch={setResult} /> : <MatchResult result={result} />}
    </div>
  );
}

export default App;
