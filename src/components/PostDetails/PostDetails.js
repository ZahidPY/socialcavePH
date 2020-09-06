import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Comments from '../Comments/Comments';
import PostDetailsStyle from './postDetailsStyle';
import NoMatch from '../NoMatch/NoMatch';
import faker from 'faker'; // faker api
//===================================================================================================

const PostDetails = () => {
  // Dynamic Route Hook
  const { postId } = useParams();
  const [post, setPost] = useState({});

  // Posts API Call with dynamic postId
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  // Style function from postDetailsStyle.js
  const classes = PostDetailsStyle();

  return (
    <>
      {post.id === undefined ? (
        <NoMatch />
      ) : (
        <div style={{ margin: '30px' }}>
          <Paper
            className={classes.clickedPost}            
          >
            <Grid container>
              <Grid item md={12}>
                <div className={classes.clickedPostContent}>
                  <Typography
                    component='h3'
                    variant='h3'
                    color='inherit'
                    gutterBottom
                  >
                    
                    {/* Post Title */}
                    <div className={classes.upperCase}>
                    {post.title}
                    </div>
                  </Typography>
                  <Typography variant='h6' color='inherit' paragraph>
                    {/* Post Body */}
                    {post.body}
                    
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          
          <Typography className={classes.clickedPost} variant='h5' gutterBottom>
                Comments
          </Typography>
        
          <Comments  postId={post.id}>
          </Comments>
        </div>
      )}
    </>
  );
};

export default PostDetails;
