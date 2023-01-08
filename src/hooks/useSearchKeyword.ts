import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchKeyword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [value, setValue] = useState('');

  useLayoutEffect(() => {
    if (keyword) {
      setValue(keyword);
    }
  }, [keyword]);
  const handleSearch = () => {
    setSearchParams({
      keyword: value,
    });
  };
  const resetKeyword = () => {
    setValue('');
    setSearchParams({});
  };
  return { value, setValue, handleSearch, keyword, resetKeyword };
};
