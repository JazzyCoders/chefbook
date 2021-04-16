import React, { useState } from 'react'
import style from'./signup.module.css'
import axios from 'axios'

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

        <div className={style.signUpContainer}>

            <h2>Sign up</h2>
            <h3>to continue in chefbook</h3>

            <form onSubmit={onSubmit}>
                <section>
                    <label htmlFor="asChef" className={style.checkmark}>As Chef</label>
                    <input className ={style.input} type="checkbox" onChange={() => setIsChef(!isChef)} name="asChef" className="checkbox" />
                </section>

                <div className="input-group-wrap">
                    <div className="input-group">
                        <input className ={style.input} type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input className ={style.input} type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last name" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input className ={style.input} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input className ={style.input} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input className ={style.input} type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input className ={style.input} type="number" onChange={(e) => setPhone(e.target.value)} placeholder="phone" required />
                    </div>
                    <span></span>
                    <div className="input-group">
                        <input className ={style.input} type="city" onChange={(e) => setCity(e.target.value)} placeholder="City" required />
                    </div>
                    <span></span>
                    <div className={style.buttonContainer}>
                    <button type='submit' className={style.submit}> Submit</button>
                    </div>

                </div>
            </form>


        </div>


    )
}
