import { useDispatch, useSelector } from "react-redux"

const App = () => {
  let dispatch = useDispatch()
  let count = useSelector(store => store)

  let handleIn = () => {
    dispatch({ type: "IN" })
  }
  let handleDec = () => {
    dispatch({ type: "DEC" })
  }
  let handleAfterIn = () => {
    setTimeout(() => {
      dispatch({ type: "IN" })
    }, 2000)
  }
  let handleAfterDec = () => {
    setTimeout(() => {
      dispatch({ type: "DEC" })
    }, 2000)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIn}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleAfterIn}>Increase after 2s</button>
      <button onClick={handleAfterDec}>Decrease after 2s</button>
    </div>
  )
}
export default App