import { Link } from "react-router-dom"

import { useState } from "react"

import "../styles/components/sign-in-create-account.scss"

export default function SignIn() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const addName = (e) => {
        setName(e.target.value)
    }

    const addPassword = (e) => {
        setPassword(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
                <form onSubmit={submit}>
                    <h3>Sign In</h3>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" value={name} onChange={addName}  />
                    </label>
                    <label htmlFor="password">
                        Password 
                        <input type="text" placeholder="" id="password" value={password} onChange={addPassword}  />
                        <p className="password-minimum">(At least 6 characters)</p>
                    </label>
                    <button className="sign-in-button">Submit</button>
                    <p className="forgot-password">Forgot password?</p>
                    <p className="new-to-beauty">New to Beauty by Jo?</p>
                    <Link to="/create-account">
                        <button type="submit" className="btn create-account-btn">Create your Beauty by Jo account</button>               
                    </Link>
                </form>
            
        </div>
    )
}