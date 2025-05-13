import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './login';
import SignUpPage from './sign';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Welcome</h1>
        <nav>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/signup" style={styles.link}>Sign Up</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  link: {
    margin: '0 10px',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#007BFF'
  }
};

export default App;
