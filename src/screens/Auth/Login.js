import React, { useState } from 'react';
import { Card, Label } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = '442672740622-69rg2oook8g6r8u7ebjuc6vd47ugm65q.apps.googleusercontent.com';

const Login = () => {
    let history = useNavigate();
    const socialLogin = (response) => {
        setButtonDisabled(true);
        let data = response.profileObj;
        let reqData = {
            "phone": data.phone,
            "email": data.email,
            "name": data.email,
            type: type
        }
        axios.post('https://subjectiv.herokuapp.com/api-v1/user/socialLogin', reqData)
            .then(({ data }) => {
                let resData = data.data;
                localStorage.setItem('token', resData.token);
                localStorage.setItem('data', resData.data);
                history('/', { replace: true });
                setButtonDisabled(false);
            }).catch(err => {
                console.log(err);
                setButtonDisabled(false);
            })
    }
    const [type, setType] = useState("Customer");
    const [buttonDisabled, setButtonDisabled] = useState(false);

    return (
        <div className='containerClass'>
            <Card style={{ padding: '20px 40px', borderRadius: '8px', boxShadow: '2px black',width:'70%' }} id='loginCard'>
                <h4 style={{ textAlign: 'center' }}>Login</h4>
                <hr />
                <div className='form-group row'>
                    <div className='col-md-6 form-check'>
                        <Label>
                            <input
                                type="radio"
                                className='form-check-input'
                                checked={type === 'Customer'}
                                name='type'
                                onChange={() => setType('Customer')}
                            />
                            Customer
                        </Label>
                    </div>
                    <div className='col-md-6 form-check'>
                        <Label>
                            <input
                                type="radio"
                                className='form-check-input'
                                name='type'
                                checked={type === 'Sneaker'}
                                onChange={() => setType('Sneaker')}
                            />
                            Sneaker Designer
                        </Label>
                    </div>
                </div><br /><br />
                <GoogleLogin
                    style={{ marginTop: 20 }}
                    clientId={CLIENT_ID}
                    disabled={buttonDisabled}
                    // render={(renderProps) => (
                    //     <button
                    //         // className={styles.socialIcon}
                    //         onClick={() => renderProps.onClick()}
                    //         disabled={renderProps.disabled}
                    //     >
                    //     Login With Google    {/* <FcGoogle /> */}
                    //     </button>
                    // )}
                    onSuccess={(response) => socialLogin(response)}
                    onFailure={(response) => console.log(response)}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={false}
                />
            </Card>
        </div>
    );
};

export default Login;