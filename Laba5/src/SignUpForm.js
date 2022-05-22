import React from 'react'
import { SignUpEmailInput } from './SignUpEmailInput'
import { SignUpPasswordInput } from './SignUpPasswordInput'
import { PhoneInput } from './PhoneInput.js'
import "./SignUpForm.css";

export class SignUpForm extends React.Component {
    state = {
        disableBtn: false,
    }
    disableBtn = (value) => {
        this.setState({disableBtn: value})
        return this.state.disableBtn
    }
    day() {
        let days = []
        for (let day = 1; day < 32; day++) {
            days.push(
                <option key={day}>{day}</option>
            )
        }
        return (
            <select>
                {days}
            </select>
        )
    }
    month() {
        let months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ]
        return (
            <select>
                {months.map(month => {
                    return <option key={month}>{month}</option>
                })}
            </select>
        )
    }
    year() {
        let years = []
        for (let year = 1960; year < 2021; year++) {
            years.push(
                <option key={year}>{year}</option>
            )
        }
        return (
            <select>
                {years}
            </select>
        )
    }
    render() {
        return(
            <form className='login'>
                <div className='divLog'>
                    <h2>SignUpForm</h2>
                <SignUpEmailInput disableBtn={this.disableBtn} />
                <SignUpPasswordInput disableBtn={this.disableBtn} />
                <input id='inp' type="text" placeholder="Фамилия" />
                <input id='inp' type="text" placeholder="Имя" />
                <input id='inp' type="text" placeholder="Отчество" />
                <div className='divRad'>
                <label class="rad-label">
                    <input type="radio" class="rad-input" name="gender"/>
                            <div class="rad-design"></div>
                        <div class="rad-text">Муж</div>
                 </label>
                 <label class="rad-label">
                    <input type="radio" class="rad-input" name="gender"/>
                        <div class="rad-design"></div>
                        <div class="rad-text">Жен</div>
                </label>
                </div>
                <div className="date">
                {this.day()}
                {this.month()}
                {this.year()}
                </div>
                <br />
                <PhoneInput />
                <br />
                <button disabled={this.state.disableBtn} onClick={this.handleBtnClick}>Отправить</button>
                </div>
            </form>
        )
    }
}