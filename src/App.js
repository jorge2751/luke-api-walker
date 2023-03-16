import { Route, Routes } from 'react-router-dom';
import './App.css';
import People from './views/People';
import Planets from './views/Planets';
import Error from './views/Error';
import SearchForm from './components/SearchForm';

function App() {

  return (
    <div className="App">
      <SearchForm />
      <Routes>
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
