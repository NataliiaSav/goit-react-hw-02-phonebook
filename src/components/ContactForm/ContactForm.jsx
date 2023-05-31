import React, { Component } from "react";
export class ContactForm extends Component {
    state = {
  contacts: [],
  name: ''
    }

    handleChange = event => {
        const {name, value} = event.currentTarget
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form>
                <label>
                    <p>Name</p>
                    <input
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type='submit'>Add contact</button>
            </form>
        );
    }                         
}