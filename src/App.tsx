import React, { useState } from 'react';
import Button from '@mui/material/Button';

import styles from './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <h2>React minimal starter kit</h2>
      <p>
        This is a simple starter kit to help you bootstrap your React project
        with few frills.
      </p>
      <Button variant="outlined" onClick={() => setCount(count + 1)}>Increase cat count: {count}</Button>
      <CatCounter count={count} />
    </div>
  );
}

function CatCounter({ count }: { count: number }) {
  const cats: Array<String> = [];
  for (let i = 0; i < count; i++) {
    cats.push('🐱');
  }
  return <>{cats}</>;
}
