import {useNavigate , Navigate} from 'react-router-dom'

function Login() {

    const isAuthenticated = true;
    const navigate = useNavigate();

    const showReports = () =>{
        if(isAuthenticated){
            console.log('ok - show reports');
            navigate('/report')
        } else 
        console.log('Nope - login first');
    };
    if (!isAuthenticated){
        return <Navigate to='/login-first'/>
    }
    return (<>
    <h2>Login Page</h2>
    <button onClick={showReports}> Show Reports</button>
    </>  );
}

export default Login;