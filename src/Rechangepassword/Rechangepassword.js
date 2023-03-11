import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../BaseUrl/BaseUrl';

export default function Rechangepassword() {
    let userData = JSON.parse(localStorage.getItem("userData"))
    console.log('userData', userData)
    const navigate = useNavigate();
    const [newData, setNewData] = useState({})
    const [errMsg, setErrMsg] = useState(false)


    const handleChange = (e) => {
        let { name, value } = e.target
        setNewData({
            ...newData,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        if (newData?.o_password && newData?.password) {
            if (newData?.password == newData?.c_password) {
                let body = {
                    email: userData?.email,
                    password: newData?.password,
                    oldPassword: newData?.o_password
                }
                await axios.post(baseUrl + "users/change-password", body).then((res) => {
                    console.log('res', res)
                    setNewData({})
                    setErrMsg(false)
                    toast.success(res?.data.message)
                    navigate("/")
                }).catch((err) => {
                    console.log('err', err)
                    toast.error(err?.response?.data.message)
                })
            } else {
                toast.error("password and confirm password are not match")
            }

        } else {
            setErrMsg(true)
        }
    }

    return (
        <div>
            <section className="password-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="login-form">
                            <h3>
                                Change Password
                            </h3>

                            <div className="login-or">

                            </div>
                            <form>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="icofont-lock" />
                                    </label>
                                    <input
                                        type="password"
                                        name="o_password"
                                        className="form-control"
                                        placeholder="Old Password"
                                        value={newData?.o_password}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errMsg && !newData?.o_password && <div className="text-danger text-start mt-2">Old Password is required!</div>}
                                </div> <br />



                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="icofont-lock" />
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="New Password"
                                        value={newData?.password}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errMsg && !newData?.password && <div className="text-danger text-start mt-2">Password is required!</div>}

                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="icofont-lock" />
                                    </label>
                                    <input
                                        type="password"
                                        name="c_password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={newData?.c_password}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {errMsg && !newData?.c_password && <div className="text-danger text-start mt-2">Confirm Password is required!</div>}

                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary" onClick={handleSubmit} > Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
