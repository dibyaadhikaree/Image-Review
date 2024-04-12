import { useField } from "../context/fieldsContext";

function Field({ field }) {
  const { value, label, id, clicked, hovered } = field;

  const [fields, dispatch] = useField();

  function handleHover() {
    dispatch({ type: "setHover", payload: field });
  }
  function handleMouseLeave() {
    dispatch({ type: "setUnhover", payload: field });
  }

  if (field.clicked) console.log("clicked in field", field);

  const style = {
    backgroundColor: clicked ? field.color : "",
    textDecoration: hovered ? "underline" : "",
  };

  return (
    <p
      className="field"
      style={style}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {value}
    </p>
  );
}

export default Field;
