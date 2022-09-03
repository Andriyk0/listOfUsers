import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectUser, setUserAlboms } from '../../store';
import { getSelectedUser, getUserAlbomsFromStore } from '../../store/selectors';
import './Alboms.scss';

export const Alboms: React.FC = () => {
  const dispatch = useDispatch();
  const userAlboms = useSelector(getUserAlbomsFromStore);
  const selectedUser = useSelector(getSelectedUser);

  const closeAlbums = () => {
    dispatch(setUserAlboms([]));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dispatch(setSelectUser(undefined!));
  };

  return (
    <div
      className="album__container"
      aria-hidden="true"
      onClick={closeAlbums}
    >
      <div className="album">
        <p className="album__user_name">{`${selectedUser?.username} albums`}</p>
        {
          userAlboms.map((albom:Album, i: number) => (
            <p key={albom.id}>{`${i + 1}. ${albom.title}`}</p>
          ))
        }
      </div>
    </div>
  );
};
