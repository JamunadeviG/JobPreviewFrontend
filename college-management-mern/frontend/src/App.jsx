import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API = 'http://localhost:8080/api';

function App() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios.get(`${API}/departments`).then(res => setDepartments(res.data));
  }, []);

  return (
    <div className="app">
      <h1>Departments</h1>
      <ul>
        {departments.map(d => (
          <li key={d._id}>{d.name} — HOD: {d.hod || 'N/A'}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;