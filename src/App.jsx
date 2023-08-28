import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
//components
import Title from './components/Title';
import QuoteGenerator from './components/QuoteGenerator';
import Footer from './components/Footer';

const url = 'https://api.quotable.io/random';

function App() {
  const [quote, setQuote] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  const newQuote = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
    console.log(quote);
  }, []);

  return (
    <main className='container'>
      <Title />
      <QuoteGenerator quote={quote} newQuote={newQuote} />
      <Footer />
    </main>
  );
}

export default App;
