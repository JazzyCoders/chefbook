import React, { useState } from 'react'
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import './signup.module.css'
import axios from 'axios'

const classes = makeStyles();
export default function Signup() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [register, setRegister] = useState(false)
    const [isChef, setIsChef] = useState(false);
    const [isCustomer, setIsCustomer] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const registerData = {
            role: isChef ? 'Chef' : 'User',
            firstName: name,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password,
            city: city
        };

        console.log(registerData)

        axios.post("http://localhost:5000/users/signup", registerData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })

        setRegister(true)
    }

    return (

        <div className="SignupContainer">

            <h2>Sign up</h2>
            <h3>to continue in chefbook</h3>

            <form className={classes.root} noValidate autoComplete="off">
                <Button variant="contained" color="primary">
                    Submit
                </Button>
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>

            <form onSubmit={onSubmit}>
                <section>
                    <label htmlFor="asChef">As Chef</label>
                    <input type="checkbox" onChange={() => setIsChef(!isChef)} name="asChef" className="checkbox" />
                </section>

                <section>
                    <label htmlFor="asCustomer">As Customer</label>
                    <input type="checkbox" onChange={() => setIsChef(!isCustomer)} name="asCustomer" className="checkbox" />
                </section>

                <div className="input-group-wrap">
                    <div className="input-group">
                        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last name" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input type="number" onChange={(e) => setPhone(e.target.value)} placeholder="phone" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input type="city" onChange={(e) => setCity(e.target.value)} placeholder="City" required />
                    </div>
                    <span></span>

                    <button type='submit'>Submit</button>

                </div>
            </form>


        </div>


    )
}
