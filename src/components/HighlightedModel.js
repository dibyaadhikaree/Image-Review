import { useNavigate } from "react-router";
import { useField } from "../context/fieldsContext";
import { click } from "@testing-library/user-event/dist/click";

function HighlightedModel() {
  const [fields] = useField();
  const navigate = useNavigate();
  return (
    <div className="model">
      {fields.map((field) => {
        return (
          field.clicked && (
            <div className="model-box">
              <h1>
                {field.label} : <p>{field.value}</p>
              </h1>
            </div>
          )
        );
      })}

      <div
        className="button"
        onClick={() => {
          console.log("clicked close");
          navigate("/", { replace: true });
        }}
      >
        Close
      </div>
    </div>
  );
}

export default HighlightedModel;
