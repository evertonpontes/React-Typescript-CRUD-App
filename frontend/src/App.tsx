import React, { useEffect, useState } from 'react';
import api from './services/api';
import Books from './components/Books';

interface IBook {
  id?: number;
  label: string;
  author: string;
  gender: string;
  published: string;
  imgURL: string;
}

function App() {
  const [books, setBooks] = useState<IBook[]>([])

  useEffect(() => {
    api.get<IBook[]>('/').then(res => {
      setBooks(res.data)
    })
  }, [])

  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
}

export default App;
