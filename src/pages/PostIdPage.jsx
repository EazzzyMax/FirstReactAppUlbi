import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../components/UI/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
// https://jsonplaceholder.typicode.com/posts
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostsById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchCommetns, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });
  
  useEffect(() => {
    fetchPostsById();
    fetchCommetns();
  }, []);
  return (
    <div>
      <h1>Пост #{params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}

      <h2>Комментарии</h2>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => {
            <div>
              ъуй
              <h5>{comm.email}</h5>
              <div>{comm.budy}</div>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
