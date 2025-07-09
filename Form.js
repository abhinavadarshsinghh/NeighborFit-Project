import React, { useState } from 'react';

const Form = ({ onMatch }) => {
  const [form, setForm] = useState({
    green_space: 5,
    nightlife: 5,
    family_friendly: 5
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: parseInt(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ preferences: form, weights: form })
    });
    const data = await res.json();
    onMatch(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      {["green_space", "nightlife", "family_friendly"].map(key => (
        <div key={key} className="mb-4">
          <label className="block font-medium mb-2 capitalize">{key.replace('_', ' ')}</label>
          <input type="range" min="1" max="10" name={key} value={form[key]} onChange={handleChange} className="w-full" />
          <p className="text-center mt-1">{form[key]}</p>
        </div>
      ))}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Find Match</button>
    </form>
  );
};

export default Form;
