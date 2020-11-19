import React from 'react';
import { useSearchTerm } from '../hooks/getData';

export default function App() {
  const { loading, searchTermResponse } = useSearchTerm('inception');


  return (
    <>
      <h1>
          Hello World
      </h1>
      <button onClick={() => console.log('this is the search result:', searchTermResponse)}>Click Me</button>
    </>
    
  );
}
