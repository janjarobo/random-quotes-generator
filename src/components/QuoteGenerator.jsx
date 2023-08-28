import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { Button } from 'react-bootstrap';

const QuoteGenerator = ({ quote, newQuote }) => {
  const { author, content } = quote;
  const tweetQuote = `https://twitter.com/intent/tweet?text="${content}" by ${author}`;
  return (
    <section id='quote-box' className='quote-box'>
      <div id='quote' className='quote-holder'>
        <FaQuoteLeft style={{ fontSize: '12px' }} />
        {` ${content} `}
        <FaQuoteRight style={{ fontSize: '12px' }} />
      </div>
      <div id='author' className='author-holder'>
        {`-${author}`}
      </div>
      <div className='btn-holder'>
        <Button
          variant='success'
          type='button'
          id='new-quote'
          onClick={() => newQuote()}
          className='btn new-quote'
        >
          Get New Quote
        </Button>

        <a
          href={tweetQuote}
          target='_blank'
          id='tweet-quote'
          style={{ textDecoration: 'none' }}
        >
          <IoLogoTwitter />
          {` this quote`}
        </a>
      </div>
    </section>
  );
};

export default QuoteGenerator;
