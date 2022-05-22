import React from 'react';

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <div className='w-50 mx-auto mt-3'>
                <h3 className='text-center'>Please Login</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
                    <div className='mt-2 text-center'>
                        <button className='btn btn-warning'>Google Sign in</button>
                        <button className='btn btn-dark ms-2'>Github Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;