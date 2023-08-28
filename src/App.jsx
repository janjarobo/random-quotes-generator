import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react';
//components
import Title from './components/Title';
import QuoteGenerator from './components/QuoteGenerator';
import Footer from './components/Footer';

const url = 'https://api.quotable.io/random';

function App() {
  const [quote, setQuote] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // setIsLoading(false);
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  //function to fetch quote
  const newQuote = () => {
    fetchData();
  };
  //fetch quote on initial reder
  useEffect(() => {
    fetchData();
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
