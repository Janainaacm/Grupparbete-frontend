import "./ClearButton.css";
import { useState } from "react";
import { useRecipeAPIState } from "../../../store/RecipeAPIState";
import { IoWarningSharp } from "react-icons/io5";

const ClearButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { clearDB } = useRecipeAPIState();

  const handleClear = () => {
    setShowPopup(true);
  };

  const handleSubmit = async () => {
    await clearDB(inputValue);
    console.log("Submitted with value:", inputValue);
    setShowPopup(false);
    setInputValue("");
  };

  const handleClose = () => {
    setShowPopup(false);
    setInputValue("");
  };

  return (
    <div>
      <button onClick={handleClear} className="danger-button">
        <IoWarningSharp /> Clear Database <IoWarningSharp />
      </button>
      {showPopup && (
        <div className="popup-background">
          <div className="popup">
            <h2>Are you sure you want to clear?</h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter password"
            />
            <div>
              <button onClick={handleSubmit}>Yes</button>
              <button onClick={handleClose}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ClearButton;
