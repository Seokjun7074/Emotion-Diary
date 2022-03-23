## SPA에 대해서 공부해보장

# **03.20**

React Router에서는 a태그를 통해 페이지 이동을 하지 않는다.
만약 a태그를 통해 페이지 이동을 하면 매번 페이지가 새로고침된다.

대신 react-router-dom에서 제공하는 Link 컴포넌트를 사용하면 페이지를 새로고침하지 않고 해당 링크에 연결된 컴포넌트들로 교체를 해주어 페이지가 바뀐것처럼 보여진다.
즉, CSR을 하도록 도와주어 빠른 반응속도를 보여준다.

---

#**03.23**

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
