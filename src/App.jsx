import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { increment, decrement } from "./redux/slice/counter"
function App() {
  const count = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="justify-content-center text-center">
      Vite<br></br>
      <button onClick={() => dispatch(decrement())} >Decrement</button>
      <h1>count is {count}</h1>
      <button onClick={() => dispatch(increment())}  >Increament</button>
    </div>
  )
}

export default App
