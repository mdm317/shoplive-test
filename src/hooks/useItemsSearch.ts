import { useMemo } from 'react';
import { useItemsStore } from '../store/ItemStore';
import { Item } from '../types';

export const useSearchedItems = (keyword: string | null): Item[] => {
  const items = useItemsStore(state => state.items);
  const searchedItems = useMemo(
    () =>
      keyword
        ? items
            .filter(item => item.title.includes(keyword))
            .map(item => {
              const splitTitle = item.title.split(keyword);
              return {
                ...item,
                splitTitle,
              };
            })
        : [],
    [items, keyword]
  );
  if (keyword) {
    return searchedItems;
  }
  return items;
};
