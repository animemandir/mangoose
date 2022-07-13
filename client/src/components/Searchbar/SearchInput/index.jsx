import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../../redux/actions/actionCreators';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import cx from 'classnames';
import styles from './SearchInput.module.scss';

const limit = 5;

const SearchInput = (props) => {
  const { setIsInputEmpty } = props;
  const { theme: { bgAccentTheme, mainTheme } } = useSelector(({ themes }) => themes);
  const { getMangaSearch } = bindActionCreators(actionCreators, useDispatch());

  const handleChange = ({ target: { value } }) => {
    setIsInputEmpty(!value);
    getMangaSearch({ title: value, limit })
  };

  const containerClasses = cx(
    styles.container,
    bgAccentTheme,
    'rounded-2 d-flex align-items-center',
  );

  const inputClasses = cx(
    styles.input,
    mainTheme,
    'flex-grow-1 me-2',
  );

  return (
    <div className={containerClasses}>
      <SearchIcon className='ms-2 me-2' />
      <input className={inputClasses} placeholder='Search' onChange={handleChange} />
    </div>
  );
};

export default SearchInput;
