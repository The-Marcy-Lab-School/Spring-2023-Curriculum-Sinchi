
export default function Clicker({ count, handleClick }) {
  return <>
    <button onClick={handleClick}>Count {count}</button>
  </>
}
