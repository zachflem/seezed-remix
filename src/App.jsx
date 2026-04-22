import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import MonsterHunter from './pages/MonsterHunter';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/monster-hunter" element={<MonsterHunter />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
