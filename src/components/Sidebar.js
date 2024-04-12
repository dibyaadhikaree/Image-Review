import { useNavigate } from "react-router";
import { useField } from "../context/fieldsContext";
import SidebarField from "./SidebarField";

function Sidebar() {
  const [fields, dispatch] = useField();

  function handleDeleteClicked() {
    dispatch({ type: "deleteClicked" });
  }
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      {fields.map((field) => (
        <SidebarField field={field} key={field.id} />
      ))}

      <div className="showFields">
        <div className="button" onClick={() => navigate("/model")}>
          Show Extracted Fields
        </div>
        <div className="button" onClick={handleDeleteClicked}>
          Delete All Fields
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
