import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page2 from './components/page2';
import Homepage from './components/homepage';

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