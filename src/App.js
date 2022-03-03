import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page2 from './Pages/page2';
import Homepage from './Pages/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
