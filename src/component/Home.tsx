import { useLayoutEffect } from 'react';
import { useItemsStore } from '../store/ItemStore';
import { getDateFormat } from '../util/getDateFormat';
import { useForm } from 'react-hook-form';
import { AddItemProp } from '../types';
import { itemInputKey } from '../const/itemInputKey';

function Home() {
  const { items, init, addItem, deleteItem } = useItemsStore(state => state);
  const { register, handleSubmit } = useForm<AddItemProp>();
  useLayoutEffect(() => {
    init();
  }, [init]);
  const onSubmit = (data: AddItemProp) => {
    addItem(data);
  };
  const handleDelete = (deleteId: number) => {
    deleteItem(deleteId);
  };
  return (
    <>
      <header>
        <div className="head-text">SHOPLIVE</div>
      </header>
      <div className="row">
        <input placeholder="검색" />
        <button>검색</button>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)}>
          {itemInputKey.map(key => (
            <input key={key} placeholder={key} {...register(key)} />
          ))}
          <button>추가</button>
        </form>
      </div>

      <div className="row">아이템 - 총 5 개</div>

      <div className="wrap-items row">
        {items.map(item => (
          <div key={item.id} className="item-row">
            <img className="thumb" src={item.imageUrl} />
            <div className="text-box">
              <div className="like">LIKE : {item.likeCount}</div>
              <div className="title">{item.title}</div>
              <div className="date">{getDateFormat(item.createdAt)}</div>
            </div>
            <div className="buttons">
              <button>수정</button>
              <button onClick={() => handleDelete(item.id)}>제거</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
