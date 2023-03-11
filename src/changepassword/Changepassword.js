import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../BaseUrl/BaseUrl';

export default function Changepassword() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: "",
        c_password: "",
    });
    const [errMsg, setErrMsg] = useState(false)

    function onChangeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onClickHandler = async () => {

        if (formData?.password && formData?.c_password) {
            if (formData?.password === formData?.c_password) {
                let body = {
                    email: localStorage.getItem('email'),
                    password: formData.password,
                }
                await axios.post(baseUrl + "users/verify-password", body).then((res) => {
                    console.log('res', res)
                    setFormData({
                        password: "",
                        c_password: "",
                    })
                    localStorage.clear()
                    navigate("/login")
                    toast.success("Password Changed Successfully!")
                }).catch((err) => {
                    console.log('err', err)
                })
            } else {
                toast.error("Password and Confirm Password does not match!")
            }
        } else {
            setErrMsg(true)
            console.log('first')
        }
    }
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <section className="login-area">
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
                                        name="password"
                                        className="form-control"
                                        placeholder="New Password"
                                        onChange={(e) => onChangeHandler(e)}
                                    />
                                    {errMsg && !formData?.password && <div className="text-danger mt-2 text-start">New Password is required!</div>}
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
                                        onChange={(e) => onChangeHandler(e)}
                                    />
                                    {errMsg && !formData?.c_password && <div className="text-danger text-start mt-2">Confirm Password is required!</div>}
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary" onClick={onClickHandler}> Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
