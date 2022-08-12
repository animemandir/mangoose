import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';
import useAuthRedirect from './useAuthRedirect';
import CONSTANTS from '../constants';
const { PAGES: {
  SIGN_UP: { path: SIGN_UP_PATH },
  PROFILE: { path: PROFILE_PATH },
  SETTINGS: { path: SETTINGS_PATH },
} } = CONSTANTS;

const redirectPaths = [
  SIGN_UP_PATH, PROFILE_PATH, SETTINGS_PATH,
];

const useAuthorization = () => {
  const { token } = useSelector(({ auth }) => auth);
  const { clearToken, refreshToken, getMe } = bindActionCreators(actionCreators, useDispatch());
  const authRedirect = useAuthRedirect();

  useEffect(() => {
    const authHandle = (event) => {
      if (event.key === 'auth') {
        if (event.newValue === 'true') refreshToken();
        else if (event.newValue === 'false') {
          clearToken();
          authRedirect(redirectPaths);
        }
      }
    };

    if (localStorage.getItem('auth') === 'true') refreshToken();
    window.addEventListener('storage', authHandle);
  }, []);

  useEffect(() => {
    if (token) {
      getMe({ token });

      // setTimeout(() => {
      //   refreshToken();
      // }, 36000);
    }
  }, [token]);

};

export default useAuthorization;
