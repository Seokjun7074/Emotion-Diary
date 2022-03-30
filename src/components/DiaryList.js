import { useState } from "react";

const sortOptionList = [
  { value: "lastest", name: "최신 순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option value={it.value} key={idx}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("lastest");

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "lastest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    /*diaryList.sort()를 사용하게되면 원본 배열자체가 정렬되므로
    JSON.parse를 사용한다.
    위와 같이 JSON.stringify(diaryList)를 사용하면
    배열인 diaryList를 문자열로 바꾸어 JSON화 시킨다.
    그 다음 JSON.parse를 사용하면 문자열로 변환된 diaryList를 다시 배열로 변환해준다.
    */
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = [];
export default DiaryList;
