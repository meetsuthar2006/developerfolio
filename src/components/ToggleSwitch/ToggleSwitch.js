import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  const nextLabel = isDark ? "Switch to Day" : "Switch to Night";

  return (
    <label className="switch" title={nextLabel} aria-label={nextLabel}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeTheme}
        aria-label={nextLabel}
      />
      <span className="slider round">
        <span className="emoji">{isDark ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;

