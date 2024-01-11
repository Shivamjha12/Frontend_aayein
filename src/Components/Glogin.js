import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    // Handle the response from Google Sign-In
    console.log(response);
};
  
function Login(){
    const clientId = '724370149000-arj17qs8ha255erpk861tidve3i005rp.apps.googleusercontent.com';

    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          redirectUri='https://backend-api-8pga.onrender.com/api-user/v1/auth/google/callback'
        />
      </div>
    );
  };
export default Login;