import React from 'react';

class ContactForm extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        var data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
          };
        fetch('http://localhost:5000/contact', options).then( (res) => {
            if(res.status === 200){
                return res.json();
            }else{
                return null;
            }
        }).then( (res) => {
            if(res !== null){
                document.getElementById('ContactFormMsg').textContent = "Thank You Your Message Has Been Sent!";
            }else{
                document.getElementById('ContactFormMsg').textContent = "Something Went Wrong!";
            }

        });
    }

    handleChange(event){
        var change = {}
        change[event.target.name] = event.target.value;
        this.setState(change);
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h3>Contact</h3>
            <p style={{color: "white"}} id="ContactFormMsg"></p>
            <div className="Input">
                {
                this.state.name === "" ?
                    <label><i className="far fa-user"></i> Name</label>
                :
                    <div />
                }
                <input 
                    onChange={this.handleChange} 
                    value={this.state.name} 
                    type="name" 
                    name="name"
                    required />
            </div>
            <div className="Input">
                {
                this.state.email === "" ?
                    <label><i className="far fa-envelope"></i> Email</label>
                :
                    <div />
                }

                <input 
                    onChange={this.handleChange} 
                    type="email"
                    name="email"
                    value={this.state.email} 
                    required />
            </div>
            <div className="TextArea">
                {
                this.state.message === "" ?
                    <label><i className="far fa-edit"></i> Message</label>
                :
                    <div />
                }
                <textarea 
                    name="message"
                    onChange={this.handleChange}
                    value={this.state.message}
                    required />
            </div>
            <button type="submit">Send <i className="fas fa-paper-plane"></i></button>
        </form>
      );
    }
}

export default ContactForm; 