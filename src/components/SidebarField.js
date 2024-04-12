import { useField } from "../context/fieldsContext";

function SidebarField({ field }) {
  const [fields, dispatch] = useField();
  function handleClick() {
    dispatch({ type: "setClicked", payload: field });
  }

  const icon = field.label.toUpperCase().split(" ");

  return (
    <div
      className="box"
      onClick={handleClick}
      style={{
        border: field.hovered ? "2px solid red" : "",
      }}
    >
      <div
        className="icon"
        style={{
          borderLeft: `3px solid ${field.color}`,
          backgroundColor: `${field.color}`,
        }}
      >
        {icon[0][0] + icon[1][0]}
      </div>
      <div className="box-content">
        <div className="label">{field.label}</div>
        <div className="value">{field.value}</div>
      </div>
      <div className="checkbox-wrapper-12" height={"15px"} width="18px">
        <div className="cbx">
          <input id="cbx-12" type="checkbox" checked={field.clicked} readOnly />
          <label htmlFor="cbx-12"></label>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path d="M2 8.36364L6.23077 12L13 2"></path>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo-12">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="4"
                result="blur"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                result="goo-12"
              ></feColorMatrix>
              <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default SidebarField;
