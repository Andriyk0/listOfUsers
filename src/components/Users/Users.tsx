import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserAlboms, getUserPosts, getUsers } from '../../api/api';
import {
  setSelectUser, setUserAlboms, setUserPosts, setUsers,
} from '../../store';
import { getUserAlbomsFromStore, getUsersFromStore } from '../../store/selectors';
import { Alboms } from '../Alboms';
import './Users.scss';

export const Users: React.FC = () => {
  const dispatsh = useDispatch();
  const users = useSelector(getUsersFromStore);
  const usersAlbum = useSelector(getUserAlbomsFromStore);

  useEffect(() => {
    const loadUsersFromServer = async () => {
      try {
        const response = await getUsers();

        dispatsh(setUsers(response));
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Error try again');
      }
    };

    loadUsersFromServer();
  }, []);

  const loadUserAlbomsFromServer = async (id: number) => {
    try {
      const response = await getUserAlboms(id);

      dispatsh(setUserAlboms(response));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Error try later');
    }
  };

  const loadUserPostsFromServer = async (id: number) => {
    try {
      const response = await getUserPosts(id);

      dispatsh(setUserPosts(response));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Error try later');
    }
  };

  const showPosts = (id:number, user:User) => {
    loadUserPostsFromServer(id);
    dispatsh(setSelectUser(user));
  };

  const showAlbums = (id:number, user:User) => {
    loadUserAlbomsFromServer(id);
    dispatsh(setSelectUser(user));
  };

  return (
    <div className="users">
      <table className="table">
        <thead>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th><abbr title="FullName">Full Name</abbr></th>
            <th><abbr title="UserName">User Name</abbr></th>
            <th><abbr title="Email">Email</abbr></th>
            <th><abbr title="City">City</abbr></th>
            <th><abbr title="Street">Street</abbr></th>
            <th><abbr title="Posts">Posts</abbr></th>
            <th><abbr title="Alboms">Alboms</abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th><abbr title="FullName">Full Name</abbr></th>
            <th><abbr title="UserName">User Name</abbr></th>
            <th><abbr title="Email">Email</abbr></th>
            <th><abbr title="City">City</abbr></th>
            <th><abbr title="Street">Street</abbr></th>
            <th><abbr title="Posts">Posts</abbr></th>
            <th><abbr title="Alboms">Alboms</abbr></th>
          </tr>
        </tfoot>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {users.map((user:User, i) => (
            <tr key={user.id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.street}</td>
              <td>
                <Link className="user__link" to="posts">
                  <button
                    type="button"
                    className="button is-primary is-light"
                    onClick={() => showPosts(user.id, user)}
                  >
                    Show Posts
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="button is-success is-light"
                  onClick={() => showAlbums(user.id, user)}
                >
                  Show Albums
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {usersAlbum.length !== 0 && (
        <Alboms />
      )}
    </div>
  );
};
