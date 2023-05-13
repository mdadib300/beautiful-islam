import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
