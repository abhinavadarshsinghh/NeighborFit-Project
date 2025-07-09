import React from 'react';

const MatchResult = ({ result }) => {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">🎯 Your Best Match</h2>
      <p className="text-lg">{result.name}</p>
      <div className="mt-4">
        <iframe
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${result.lon - 0.01},${result.lat - 0.01},${result.lon + 0.01},${result.lat + 0.01}&layer=mapnik&marker=${result.lat},${result.lon}`}
          width="100%" height="300px" title="Map"
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default MatchResult;
