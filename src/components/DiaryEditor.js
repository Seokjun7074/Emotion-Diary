import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "./../App.js";

import { emotionList } from "../util/emotion";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

export const getString = (date) => {
  // return date.toISOString().slice(0, 10);
  // //ISO형식 문자열 반환 모질라 검색해보자
  let year = date.getFullYear();

  let month = date.getMonth() + 1;

  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [date, setDate] = useState(getString(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하십니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }
    navigate("/", { replace: true });
  };
  useEffect(() => {
    if (isEdit) {
      setDate(getString(new Date(parseInt(originData.date))));
      setContent(originData.content);
      setEmotion(originData.emotion);
    }
  }, [isEdit, originData]);
  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "일기 수정하기" : "새 일기 쓰기"}
        leftChild={<MyButton text={"뒤로 가기"} onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          {/* division과 같은 역할수행 */}
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box_text_wrapper">
            <textarea
              placeholder="오늘은 어땠나요..?"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </section>

        <section>
          <div className="control_box">
            <MyButton text={"취소하기"} onClick={() => navigate(-1)} />
            <MyButton
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default DiaryEditor;
