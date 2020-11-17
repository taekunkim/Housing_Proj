import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookmarkIcons } from '../assets/icons/all';
import {
  getHousingFavorites,
  selectHousingFavorites,
} from '../redux/slices/housing';
import Bookmark from './Bookmark';

const BookmarksList: React.FC = () => {
  const favorites = useSelector(selectHousingFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHousingFavorites());
  }, [dispatch]);

  return (
    <div className="bookmarks-list">
      <div className="d-flex justify-content-center">
        <bookmarkIcons.bookmark className="mr-2 mb-auto align-self-baseline" />
        <span className="bookmarks-list-title">Bookmarks</span>
      </div>
      {favorites && // TODO this should be handled within the loader component (not yet made)
        Object.values(favorites).map((favorite) => (
          <div key={favorite.roomId} className="w-100 mb-1 px-1">
            <Bookmark {...favorite} />
          </div>
        ))}
    </div>
  );
};

export default BookmarksList;
