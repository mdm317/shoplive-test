import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AddItemProp, EditItemProp } from '../types';
import { itemInputKey } from '../const/itemInputKey';
import { useItemsStore } from '../store/ItemStore';

type EditFromProp = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  id: number;
};

function EditForm({ visible, setVisible, id }: EditFromProp) {
  const editItem = useItemsStore(state => state.editItem);
  const items = useItemsStore(state => state.items);
  const item = items.find(item => item.id === id);

  const { register, handleSubmit } = useForm<EditItemProp>();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (visible && dialog && id !== -1) {
      dialog.showModal();
    } else if (!visible && dialog && id !== -1) {
      dialog.close();
    }
  }, [visible]);
  const onSubmit = (data: AddItemProp) => {
    console.log(data);
    if (!item) return;
    const imageUrl = data.imageUrl !== '' ? data.imageUrl : item.imageUrl;
    const likeCount = data.likeCount !== '' ? data.likeCount : item.likeCount.toString();
    const title = data.title !== '' ? data.title : item.title;

    editItem({ imageUrl, likeCount, title, id });
    setVisible(false);
  };

  return (
    <dialog ref={dialogRef}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {itemInputKey.map(key => (
          <input defaultValue={item ? item[key] : ''} key={key} placeholder={key} {...register(key)} />
        ))}
        <button value="default">저장</button>
      </form>
      <button
        onClick={() => {
          setVisible(false);
        }}
        value="cancel"
      >
        취소
      </button>
    </dialog>
  );
}

export default EditForm;
