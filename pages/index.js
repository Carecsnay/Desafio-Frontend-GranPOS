import { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import phrases from '../src/data/phrases.json';

export default function Home() {
  const [greeting, setGreeting] = useState('');
  const [randomPhrase, setRandomPhrase] = useState(null);

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

    // Seleciona uma frase aleatória do arquivo JSON
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 64px)', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>{greeting}</h1>
        <h2>Seja bem-vindo(a)</h2>
        <p>Fico feliz de ter você por aqui.</p>
      </div>

      {randomPhrase && (
        <Card className="text-center shadow" style={{ maxWidth: '600px', width: '100%' }}>
          <Card.Header>Frase Motivacional</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p className="mb-3">"{randomPhrase.frase}"</p>
              <footer className="blockquote-footer">
                <cite title="Autor">{randomPhrase.autor}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}