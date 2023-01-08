import { DUMMY } from '../dummies';
import { getDateFormat } from '../util/getDateFormat';

function Home() {
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
        <input placeholder="title" />
        <input placeholder="likeCount" />
        <input placeholder="imageUrl" />
        <button>추가</button>
      </div>

      <div className="row">아이템 - 총 5 개</div>

      <div className="wrap-items row">
        {DUMMY.map(item => (
          <div key={item.id} className="item-row">
            <img className="thumb" src={item.imageUrl} />
            <div className="text-box">
              <div className="like">LIKE : {item.likeCount}</div>
              <div className="title">{item.title}</div>
              <div className="date">{getDateFormat(item.createdAt)}</div>
            </div>
            <div className="buttons">
              <button>수정</button>
              <button>제거</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
