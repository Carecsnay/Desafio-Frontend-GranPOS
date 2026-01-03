import { useState, useEffect } from 'react';
export default function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        return 'Bom dia!';
      } else if (hour >= 12 && hour < 18) {
        return 'Boa tarde!';
      } else {
        return 'Boa noite!';
      }
    };
    setGreeting(getGreeting());
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{greeting}</h1>
      <h2>Seja bem-vindo(a)</h2>
      <p>Fico feliz de ter você por aqui.</p>
    </div>
  );
}