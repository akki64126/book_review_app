import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Specific_book from './components/specific_book/Specific_book';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/specific_book' element={<Specific_book />} />
      </Routes>
    </Router>
  );
}
export default App;