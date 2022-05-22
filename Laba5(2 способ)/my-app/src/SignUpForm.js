import React, { Component } from "react";
import './style1.css';
import './stylees.css';
import './PhoneInput';

class ControlledFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email:"",
            Password1:"",
            Password2:"",
            studentName: "",
            gender: "",
            DateBirthday: "2000",
            PhoneNumber:"",
            disableBtn: true,
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    render() {
        return (
            <div>
                <h3>Controlled Component</h3>
                <form>
                    <label> Enter Email: </label>
                    <input
                        type="email"
                        name="Email"
                        placeholder="lilkrug_2003@mail.ru"
                        onChange={this.onChangeHandler}
                        >

                    </input>
                    <br />
                    <br />
                    <label> Enter Password: </label>
                    <input
                        type="password"
                        name="Password1"
                        placeholder="********"
                        pattern="[0-9][0-9][0-9][a-z][a-z][a-z]"
                        onChange={this.onChangeHandler}>
                    </input>
                    <br />
                    <br />
                    <label> Repeat Password: </label>
                    <input
                        type="password"
                        name="Password2"
                        placeholder="********"
                        pattern="[0-9][0-9][0-9][a-z][a-z][a-z]"
                        onChange={this.onChangeHandler}
                        >
                    </input>
                    <br />
                    <br />
                    <label>Student Name: </label>
                    <input
                        type="text"
                        name="studentName"
                        placeholder="Enter Name "
                        onChange={this.onChangeHandler}
                    />
                    <br />
                    <br />
                    <label>Gender: </label>
                    <label htmlFor="test1">Male</label>
                    <input
                        type="radio"
                        id="test1"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.onChangeHandler}
                    />
                    <label htmlFor="test2">Female</label>
                    <input
                        type="radio"
                        id="test2"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.onChangeHandler}
                    />
                    <br />
                    <br />
                    <label>Date: </label>
                    <select
                        name="DateBirthday"
                        value={this.state.DateBirthday}
                        onChange={this.onChangeHandler}
                    >
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                    </select>
                    <br/>
                    <br/>
                    <label>Phone Number: </label>
                    <input
                        type="number"
                        name="PhoneNumber"
                        placeholder="Enter Number"
                        onChange={this.onChangeHandler}>
                    </input>
                    <br/>
                    <br/>
                    <div style={{width:250 ,textAlign:"center"}}>
                    <button type="submit"
                            name="Input"
                            disabled={isButtonDisabled}
                            onChange={this.onChangeHandler}>
                        Input
                    </button>
                    </div>
                </form>
                <br />
                <hr />
                <p>State of Component</p>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>

        );
    }
}


export default ControlledFormComponent;