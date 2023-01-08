import './App.scss';

import DescriptionComponent from './DescriptionComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/p" element={<DescriptionComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
