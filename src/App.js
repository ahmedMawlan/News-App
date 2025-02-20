import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NaveBar from'./components/navebar'
import NewsBoard from'./components/newsBoard'
import NotFound from './components/notFound'

function App() {

  const [category, setCategory] = useState("general");

  return (
    <>

      <NaveBar setCategory={setCategory} />
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<NewsBoard category={category} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
