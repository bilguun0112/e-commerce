import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const navigate = useNavigate()
    function Submit(e) {
        e.preventDefault();
        navigate('/', { replace: true, state: { bookName: "Fake Title" } })
    }
    return (
        <div style={{
            paddingTop: "25vh"
        }}>
            <form className="container w-25" onSubmit={Submit}>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Log In
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </div>
    );
}

export default LogIn;