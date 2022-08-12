import React from 'react';
import { isEmpty } from 'lodash';
import { Spinner } from 'react-bootstrap';
import MinorHeader from '../components/Headers/MinorHeader';

const useLoading = (options) => {
  const { data, title, isFetching, spinner = true } = options;

  if (isEmpty(data)) {
    if (!spinner && isFetching) return (
      <></>
    );
    if (isFetching) return (
      <Spinner animation='border' role='status' />
    );
    if (title) return (
      <MinorHeader className='text-center mt-5 mb-5 fs-3'>{title}</MinorHeader>
    );
  }
};

export default useLoading;
