import React, { Component } from 'react';
import './styles.css';




class PhoneInput extends Component {

    state = {
    key: 3,
    name: "Россия",
    code: '+7',
    img: 'ru.png',
    place: '+7 (___) ___-__-__',
    mask: "XX (XXX) XXX-XX-XX",
    count: 12
    }

    countries =
        [
            {
                key: 1,
                name: 'Беларусь',
                code: '+375',
                img: 'by_.png',
                place: '+375 (__) ___-__-__',
                mask: "XXXX (XX) XXX-XX-XX",
                count: 13
            },
            {
                key: 2,
                name: "Польша",
                code: '+48',
                img: 'pl.png',
                place: '+48 ___-___-___',
                mask: "XXX XXX-XXX-XXX",
                count: 12
            },
            {
                key: 3,
                name: "Россия",
                code: '+7',
                img: 'ru.png',
                place: '+7 (___) ___-__-__',
                mask: "XX (XXX) XXX-XX-XX",
                count: 12
            },
            {
                key: 4,
                name: "Украина",
                code: '+380',
                img: 'ua.png',
                place: '+380 (__) ___-__-__',
                mask: "XXXX (XX) XXX-XX-XX",
                count: 13
            },
            {
                key: 5,
                name: "Литва",
                code: '+370',
                img: 'lt.png',
                place: '+370 (__XX) ___-__-__',
                mask: "XXXX (XX) XXX-XX-XX",
                count: 13
            },
            {
                key: 6,
                name: "Латвия",
                code: '+371',
                img: 'lv.png',
                place: '+371 ____-____',
                mask: "XXXX XXXX-XXXX",
                count: 12
            },
        ];


    list() {
        return (
            <ul>
                {this.countries.map((c) => {
                    return (
                        <li onClick={() => {
                            this.setState({
                                key: c.key,
                                name: c.name,
                                code: c.code,
                                img: c.img,
                                place: c.place,
                                count: c.count,
                                number: c.code,
                                mask: c.mask
                            });
                            console.log(this.state.name);
                        }
                        }>
                            <label>
                                <img className='listImg' src={c.img} alt=""/>
                                <input type="radio" value={c.name} />{c.name} {c.code}
                            </label>
                        </li>
                    );
                })}
            </ul>

        );
    }


    numberField() {
        return (
            <div>
                <label id='labelNumField'>
                    <img className="fieldImg" src={this.state.img} alt=""/>
                    <input type='tel'
                        onClick={() => {
                            this.setState({ display: !this.state.display });
                            console.log(this.state.display);
                        }}
                        placeholder={this.state.place}
                        onChange={this.handleChange}
                        value={this.state.number}
                        maxLength={this.state.count} />
                </label>

            </div>
        );
    }
    

    handleChange = (e) => {
        this.setState(
            {
                number: e.target.value,
            },
            () => {
                this.countries.forEach((c) => {
                    if (this.state.number === c.code)
                        this.setState({
                            value: c.value,
                            img: c.img,
                            mask: c.mask,
                            count: c.count,
                            name: c.name
                        });
                });

                if (this.state.count === this.state.number.length) {
                    let maskArr = this.state.mask.split(""),
                        numberArr = this.state.number.split("");
                    for (let i = 0, j = 0; i < maskArr.length; i++)
                        if (maskArr[i] === "X") {
                            maskArr[i] = numberArr[j];
                            j++;
                        }
                    let number = maskArr.join("");
                    this.setState({ number: number });
                }
            }
        );
    };


    outputMes() {
       return (
            <div>Вы выбрали  — <span id='weightSpan'>{this.state.name}.</span></div>
        );
    }



    render() {
        return (
            <div id='number'>
                {this.numberField()}
                {this.state.display ? this.list() : null}
                {this.outputMes()}
            </div>
        );
    }

}

export default PhoneInput;