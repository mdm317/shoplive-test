import { useLayoutEffect, useState } from 'react';
import { useItemsStore } from '../store/ItemStore';
import { getDateFormat } from '../util/getDateFormat';
import { useForm } from 'react-hook-form';
import { AddItemProp } from '../types';
import { itemInputKey } from '../const/itemInputKey';
import EditForm from './EditForm';
import { useSearchKeyword } from '../hooks/useSearchKeyword';
import { useSearchedItems } from '../hooks/useItemsSearch';

function Home() {
  const { init, addItem, deleteItem } = useItemsStore(state => state);
  const { keyword, value: keywordValue, setValue: setKeywordValue, handleSearch, resetKeyword } = useSearchKeyword();
  const items = useSearchedItems(keyword);

  const { register, handleSubmit } = useForm<AddItemProp>();
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [editIndex, setEditIndex] = useState<number>(-1);
  useLayoutEffect(() => {
    init();
  }, [init]);
  const onSubmit = (data: AddItemProp) => {
    addItem(data);
  };
  const handleDelete = (deleteId: number) => {
    deleteItem(deleteId);
  };
  const handleEdit = (editId: number) => {
    setVisibleEdit(true);
    setEditIndex(editId);
  };

  return (
    <>
      <EditForm visible={visibleEdit} setVisible={setVisibleEdit} id={editIndex} />
      <header>
        <div className="head-text">SHOPLIVE</div>
      </header>
      <div className="row">
        <input value={keywordValue} onChange={e => setKeywordValue(e.target.value)} placeholder="검색" />
        <button onClick={handleSearch}> 검색</button>
        <button onClick={resetKeyword}>취소</button>
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
              <button onClick={() => handleEdit(item.id)}>수정</button>
              <button onClick={() => handleDelete(item.id)}>제거</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
