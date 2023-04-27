// import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Reducers/CounterReducer";
import { setAge, setEmail, setName } from "./Reducers/UserReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const userData = useSelector((state) => state.user);
  console.log(count);
  console.log(userData);
  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };
  const handleAgeChange = (e) => {
    dispatch(setAge(e.target.value));
  };
  return (
    <div className="App" style={{padding:"3rem"}}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={userData.name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              value={userData.age}
              onChange={handleAgeChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={userData.email}
              onChange={handleEmailChange}
            />
          </label>
        </form>
        <h6>UserData</h6>
        <ul>
          <li>{userData.name}</li>
          <li>{userData.age}</li>
          <li>{userData.email}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
