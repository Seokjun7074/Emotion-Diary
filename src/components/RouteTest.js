import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div>
      <Link to={"/"}>Home1</Link>
      <br />
      <Link to={"/diary"}>Diary</Link>
      <br />
      <Link to={"/new"}>New</Link>
      <br />
      <Link to={"/edit"}>Edit</Link>
      <br />
    </div>
  );
};
export default RouteTest;
