import React, { useEffect, useState } from 'react';
import api from './services/api';

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
      {
        books.map(book => {
          return(
            <div>
              <strong>Label:</strong>
              <p>{book.label}</p><hr/>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
