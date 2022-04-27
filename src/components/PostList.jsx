import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;
  } else {
    return (
      <div style={{ marginTop: 20 }}>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <h3>Количество постов: {posts.length}</h3>
        <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={250} classNames='post'>
              <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
};

export default PostList;
