import React  from 'react';
import '../styles/containers/ChangPass.css';
import Button from "../components/General/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
class ChangePass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            check : false,
            password : '',
            new_pass : '',
            new_pass2 : ''

        }
        this.check = this.check.bind(this)
        this.change = this.change.bind(this)
    }

    componentDidMount(){

    }

    check() {
        axios.post('http://localhost:3030/user/checkpass', {
            id : this.state.id,
            password : this.state.password
        })
        .then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                alert('thành công')
                this.setState({
                    check: true
                })
            } else {
                alert('that bai')
            }
        }).catch(
            alert('sai mat khau')
        )
    }

    change() {
        if ( this.state.new_pass != this.state.new_pass2) return alert('AHUHU')

        axios.post('http://localhost:3030/user/changepass', {
            id : this.state.id,
            password : this.state.new_pass
        })
        .then(res => {
            console.log(res)
            if (res.data.status == 'success') {
                alert('thành công')
            } else {
                alert('that bai')
            }
        })
    }

    render(){
        return(
            <div className="change_pass">
            <h1>Change Password</h1>
            { !this.state.check ? 
                <div className="enter-pass">
                    <p>Enter your current password</p>
                    <input type="password" onChange={(e) => { this.setState( {password :e.target.value})}}></input>
                    <button className="btn-check" onClick={this.check}>Check</button>
                </div>
                : null
            }

            { this.state.check ? 
            (
                <div>
                    <div className="enter-pass">
                    <p>Enter your new password</p>
                    <input type="password" onChange={(e) => { this.setState( {new_pass :e.target.value})}}></input>
                    </div>

                    <div className="enter-pass">
                    <p>Enter your new password again</p>
                    <input type="password" onChange={(e) => { this.setState( {new_pass2 :e.target.value})}}></input>
                    </div>
                    <button className="btn-check" onClick={this.change}>Change</button>
                </div>
            )
            : null
            }
            </div>
        )
    }
}

export default ChangePass;