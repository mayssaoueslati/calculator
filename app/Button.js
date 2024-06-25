
import styles from "./page.css";

export default function Button({ number, callback }) {
  const handleClick = () => {
    callback();
  };

  return (
    <button className="button" onClick={handleClick}>
      {number}
    </button>
  );
}

