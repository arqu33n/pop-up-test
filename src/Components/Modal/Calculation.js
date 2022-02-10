import React from "react";
import "./form.css";

export default class Calculation extends React.Component {
  render() {
    return (
      <div className="form__calculation">
        <p className="form__input-label">
          Итого можете внести в качестве досрочных:
        </p>
        <div className="form__calculation-checkbox">
          <input
            id="calculation-checkbox1"
            type="checkbox"
            name="calculation-choice[]"
            value="в 1-ый год"
            className="calculation-checkbox_custom"
          ></input>
          <label className="form__calculation-desc" for="calculation-checkbox1">
            {" "}
            <span className="form__calculation-result">78000 рублей </span>в
            1-ый год
          </label>
        </div>
        <div className="form__calculation-checkbox">
          <input
            id="calculation-checkbox2"
            type="checkbox"
            name="calculation-choice[]"
            value="во 2-ой год"
            className="calculation-checkbox_custom"
          ></input>
          <label className="form__calculation-desc" for="calculation-checkbox2">
            {" "}
            <span className="form__calculation-result">78000 рублей </span>
            во 2-ой год
          </label>
        </div>
        <div className="form__calculation-checkbox">
          <input
            id="calculation-checkbox3"
            type="checkbox"
            name="calculation-choice[]"
            value="в 3-ий год"
            className="calculation-checkbox_custom"
          ></input>
          <label className="form__calculation-desc" for="calculation-checkbox3">
            {" "}
            <span className="form__calculation-result">78000 рублей </span>в
            3-ий год
          </label>
        </div>
        <div className="form__calculation-checkbox">
          <input
            id="calculation-checkbox4"
            type="checkbox"
            name="calculation-choice[]"
            value="в 4-ый год"
            className="calculation-checkbox_custom"
          ></input>
          <label className="form__calculation-desc" for="calculation-checkbox4">
            {" "}
            <span className="form__calculation-result">26000 рублей </span>в
            4-ый год
          </label>
        </div>
      </div>
    );
  }
}
