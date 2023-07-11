import { useFetcher } from 'react-router-dom';
import { useEffect, useState } from 'react';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
      setInputValue('');
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={classes.newsletter}
    >
      <input
        type='email'
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
        value={inputValue}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
