import create from 'zustand';
import { AddItemProp, Item } from '../types';
import { DUMMY } from '../dummies';

interface ItemsState {
  items: Item[];
  init: () => void;
  addItem: (prop: AddItemProp) => void;
  deleteItem: (id: string) => void;
}

export const useItemsStore = create<ItemsState>()(set => ({
  items: [],
  init: () =>
    set(() => {
      const localStorageData = localStorage.getItem('dummy');
      if (localStorageData) {
        const datas = JSON.parse(localStorageData);
        return { items: datas };
      } else {
        localStorage.setItem('dummy', JSON.stringify(DUMMY));
        return { items: DUMMY };
      }
    }),
  addItem: prop =>
    set(state => {
      const createdAt = new Date().getTime();
      const { title, imageUrl, likeCount } = prop;
      const newItems = [
        ...state.items,
        {
          title,
          imageUrl,
          likeCount: Number(likeCount),
          createdAt,
          id: createdAt,
        },
      ];
      localStorage.setItem('dummy', JSON.stringify(newItems));
      return { items: newItems };
    }),
  deleteItem: deleteId =>
    set(state => {
      const idx = state.items.findIndex(({ id }) => id === Number(deleteId));
      if (idx !== -1) {
        const newItems = [...state.items];
        newItems.splice(idx, 1);
        localStorage.setItem('dummy', JSON.stringify(newItems));
        return { items: newItems };
      }
      return { items: state.items };
    }),
}));
