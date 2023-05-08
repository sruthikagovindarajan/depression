import '../css/SI.css';
import { useState } from 'react';
import { Link } from "react-router-dom";


const SimpleInput = (props) => {
    const [EnteredName, setEnteredName] = useState('');
    const [EnteredPwd, setEnteredPwd] = useState('');
    const InputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const IputChangeHandler = (event) => {
        setEnteredPwd(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (EnteredName.trim() == '') {
            alert("Username is empty! Enter valid username");
            return;
        }
        console.log(EnteredName);
        console.log(EnteredPwd)
    };


    return (
            <div className="divis">
                <header className="App-header">

                    <form onSubmit={handleSubmit} >
                        <h3>Login Here</h3>
                        <label className="username">Username</label>
                        <input type="text" placeholder="Email or Phone" id="username" onChange={InputChangeHandler} />
                        <label className="password">Password</label>
                        <input type="password" placeholder="Password" id="password" onChange={IputChangeHandler} />
                        <Link to="/homepage">click</Link>
                    </form>
                </header>
            </div>
    );

}
export default SimpleInput;