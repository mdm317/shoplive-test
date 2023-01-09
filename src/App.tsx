import './styles/App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
