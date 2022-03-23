import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  console.log(id, mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button
        onClick={() => {
          setSearchParams({ id: "123", mode: "superDark" });
        }}
      >
        querySet바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME으로 가기
      </button>
    </div>
  );
};

export default Edit;
