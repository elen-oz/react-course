import NewPost from './NewPost';
import Post from './Post';
import { useState } from 'react';
import classes from './PostList.module.css';

const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author='Lena' body='The weather is wounderful' />
      </ul>
    </>
  );
};

export default PostsList;
