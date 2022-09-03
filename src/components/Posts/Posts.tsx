import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSelectedUser, getUserPostsFromStore } from '../../store/selectors';
import './Posts.scss';

export const Posts: React.FC = () => {
  const posts = useSelector(getUserPostsFromStore);
  const selectedUser = useSelector(getSelectedUser);

  return (
    <div
      className="posts__container"
    >
      <div className="posts">
        <p className="posts__user_name">{`${selectedUser?.username} posts`}</p>
        {
          posts.map((post:Post, i: number) => (
            <p key={post.id}>{`${i + 1}. ${post.title}`}</p>
          ))
        }
        <Link to="/">
          <button type="button" className="button is-danger">
            Go to Users
          </button>
        </Link>
      </div>
    </div>
  );
};
