import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/CardList';

function App() {
  const cards = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 10' },
  ];

  return (
    <div>
      <Navbar/>
      <h3> Notions </h3>
      <CardList cards={cards}/>
      <h3> Projects </h3>
      <CardList cards={cards}/>
      <h3> Achievements or certifications </h3>
      <CardList cards={cards}/>
    </div>
  );
}

export default App;
