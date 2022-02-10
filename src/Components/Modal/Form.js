import React from "react";
import Calculation from "./Calculation";
import { useState } from "react";
import "./form.css";
// function Form() {
export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      calcVisible: false,
      inputValue: "",
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateInput(event) {
    this.setState({ inputValue: event.target.value });
  }
  handleSubmit() {
    console.log("Your input value is: " + this.state.inputValue);
  }
  onClick() {
    this.setState((prevState) => ({ calcVisible: !prevState.calcVisible }));
  }
  render() {
    return (
      <div className="form">
        <h1 className="form__title">Налоговый вычет</h1>
        <span className="form__description">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. <br />
          Размер налогового вычета составляет не более 13% от своего
          официального годового дохода.
        </span>
        <form action="SUBMIT" className="form__content">
          <label for="salary" className="form__input-label">
            Ваша зарплата в месяц
          </label>
          <input
            id="salary"
            type="text"
            placeholder="Введите данные"
            className="form__input"
            value={this.state.inputValue}
            onChange={this.updateInput}
          ></input>
          <div
            className="form__input-btn"
            onClick={() => {
              this.onClick();
              this.handleSubmit();
            }}
          >
            Рассчитать
          </div>
          {this.state.calcVisible ? <Calculation /> : null}

          <div className="form__radio">
            <p className="form__radio-title">Что уменьшаем?</p>
            <div className="form__radio-content">
              <input
                className="form__radio-input"
                type="radio"
                id="payment"
                name="reduce"
                value="payment"
                checked
              ></input>
              <label className="form__radio-label" for="payment"></label>
            </div>
            <div>
              <input
                className="form__radio-input form__radio-input2 "
                type="radio"
                id="period"
                name="reduce"
                value="period"
              ></input>
              <label className="form__radio-label" for="period"></label>
            </div>
          </div>
          <button className="form__btn">Добавить</button>
        </form>
      </div>
    );
  }
}
