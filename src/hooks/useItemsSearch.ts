import { useMemo } from 'react';
import { useItemsStore } from '../store/ItemStore';

export const useSearchedItems = (keyword: string | null) => {
  const items = useItemsStore(state => state.items);
  const searchedItems = useMemo(
    () => (keyword ? items.filter(item => item.title.includes(keyword)) : []),
    [items, keyword]
  );
  if (keyword) {
    return searchedItems;
  }
  return items;
};
