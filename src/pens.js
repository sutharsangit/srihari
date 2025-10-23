import React, { useState, useEffect } from 'react';


function Pens() {
  // Load from local storage or default
  const loadPens = () => {
    const data = localStorage.getItem('pens');
    return data ? JSON.parse(data) : [
      { id: 1, name: 'Ballpoint Pen', rate: 1.5 },
      { id: 2, name: 'Fountain Pen', rate: 5.0 },
      { id: 3, name: 'Gel Pen', rate: 2.0 },
    ];
  };

  const [pens, setPens] = useState(loadPens());

  const [newPenName, setNewPenName] = useState('');
  const [newPenRate, setNewPenRate] = useState('');
  const [editPenId, setEditPenId] = useState(null);
  const [editPenName, setEditPenName] = useState('');
  const [editPenRate, setEditPenRate] = useState('');

  // Save to local storage whenever pens change
  useEffect(() => {
    localStorage.setItem('pens', JSON.stringify(pens));
  }, [pens]);

  const handleAdd = () => {
    if (!newPenName || !newPenRate) return;
    const newId = pens.length ? Math.max(...pens.map(p => p.id)) + 1 : 1;
    setPens([...pens, { id: newId, name: newPenName, rate: parseFloat(newPenRate) }]);
    setNewPenName('');
    setNewPenRate('');
  };

  const handleDelete = (id) => {
    setPens(pens.filter(p => p.id !== id));
  };

  const handleEdit = (pen) => {
    setEditPenId(pen.id);
    setEditPenName(pen.name);
    setEditPenRate(pen.rate.toString());
  };

  const handleSave = () => {
    setPens(pens.map(p => (
      p.id === editPenId ? { ...p, name: editPenName, rate: parseFloat(editPenRate) } : p
    )));
    setEditPenId(null);
    setEditPenName('');
    setEditPenRate('');
  };

  return (
    <div>
      <h2>Pens</h2>
      <ul>
        {pens.map(pen => (
          <li key={pen.id}>
            {editPenId === pen.id ? (
              <>
                <input
                  type="text"
                  value={editPenName}
                  onChange={(e) => setEditPenName(e.target.value)}
                />
                <input
                  type="number"
                  step="0.01"
                  value={editPenRate}
                  onChange={(e) => setEditPenRate(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={() => setEditPenId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {pen.name} - ${pen.rate.toFixed(2)}
                <button onClick={() => handleEdit(pen)}>Edit</button>
                <button onClick={() => handleDelete(pen.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {/* Add new pen */}
      <div>
        <input
          type="text"
          placeholder="Pen name"
          value={newPenName}
          onChange={(e) => setNewPenName(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Rate"
          value={newPenRate}
          onChange={(e) => setNewPenRate(e.target.value)}
        />
        <button onClick={handleAdd}>Add Pen</button>
      </div>
    </div>
  );
}

export default Pens;