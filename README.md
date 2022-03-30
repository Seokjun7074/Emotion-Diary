# SPA에 대해서 공부해보장

React Router에서는 a태그를 통해 페이지 이동을 하지 않는다.
만약 a태그를 통해 페이지 이동을 하면 매번 페이지가 새로고침된다.

대신 react-router-dom에서 제공하는 Link 컴포넌트를 사용하면 페이지를 새로고침하지 않고 해당 링크에 연결된 컴포넌트들로 교체를 해주어 페이지가 바뀐것처럼 보여진다.
즉, CSR을 하도록 도와주어 빠른 반응속도를 보여준다.

---

## Query string

웹페이지에 데이터를 전달하는 가장 간단한 방법  
/edit?id=10&mode=dark

```
const [searchParams, setSearchParams] = useSearchParams();
const id = searchParams.get("id");
const mode = searchParams.get("mode");

```

## Navigate

페이지 이동에 사용

```
const navigate = useNavigate();
<button onClick={() => {navigate("/");}}>HOME으로 가기</button>
<button onClick={() => {navigate(-1);}}>뒤로 가기</button>
```

---

## Provider컴포넌트와 Context

Context를 사용하면 상위에 위치한 부모 컴포넌트에서 하위 자식 컴포넌트까지 하나하나 props를 넘겨주지 않고 직통으로 props를 넘길 수 있다. => 즉, 전역적인 데이터들을 공유하기위해 나온 방법이다.

```

export const DiraryStateContext = React.createContext();
export const DiraryDispatchContext = React.createContext();


<DiraryStateContext.Provider value={data}>
      <DiraryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiraryDispatchContext.Provider>
    </DiraryStateContext.Provider>
```

위와 같은 식으로 Provider컴포넌트의 하위 컴포넌트들에 데이터를 공급해준다.

Context를 사용하면 해당 컴포넌트는 재사용하기 어려워 진다는 단점이 있다. 해당 컴포넌트는 Context가 없이 재사용이 어렵기 때문입니다.

---

## 옵션 등으로 배열을 정렬시킬 때

```
const getProcessedDiaryList = () => {
    const copyList = JSON.parse(JSON.stringify(diaryList));
  };
```

diaryList.sort()를 사용하게되면 원본 배열자체가 정렬되므로 JSON.parse를 사용한다.
위와 같이 JSON.stringify(diaryList)를 사용하면
배열인 diaryList를 문자열로 바꾸어 JSON화 시킨다.
그 다음 JSON.parse를 사용하면 문자열로 변환된 diaryList를 다시 배열로 변환해준다.
