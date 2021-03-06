import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../store/selectors';
import './Nav.scss';

export const Nav: React.FC = () => {
  const user = useSelector(getUser);

  return (
    <div className="Nav">
      <NavLink to="/" className="Nav__link">
        Home
      </NavLink>
      <NavLink to="/movie_list" className="Nav__link">
        Movie list
      </NavLink>
      {
        !user
          ? (
            <>
              <NavLink to="/login" className="Nav__link">
                Log in
              </NavLink>
              <NavLink to="/register" className="Nav__link">
                Register
              </NavLink>
            </>
          )
          : (
            <NavLink to="/profile" className="Nav__link">
              Profile
            </NavLink>
          )
      }
      {
        user?.role === 'admin'
          && (
            <>
              <NavLink to="/add_movie" className="Nav__link">
                Add movie
              </NavLink>
              <NavLink to="/edit_movie_list" className="Nav__link">
                Edit list
              </NavLink>
            </>
          )
      }
    </div>
  );
};
