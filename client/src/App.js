import './App.scss';
import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home } from './views';

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
