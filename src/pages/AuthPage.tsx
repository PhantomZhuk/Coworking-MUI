import React from 'react';
import PasswordInput from '../components/PasswordInput';
import { Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { Login, Register } from '../services/auth.services';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
    const [alignment, setAlignment] = React.useState('login');
    const [LoginPassword, setLoginPassword] = React.useState('');
    const [RegisterPassword, setRegisterPassword] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    const queryClient = new QueryClient();

    const RegisterMutation = useMutation({
        mutationFn: Register,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user'],
                exact: true,
            });
            console.log('Register successful');
            navigate('/');
        },
    });

    const LoginMutation = useMutation({
        mutationFn: Login,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user'],
                exact: true,
            });
            console.log('Login successful');
            navigate('/');
        },
    });

    const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        RegisterMutation.mutate({
            username: (document.getElementById('usernameRegister') as HTMLInputElement)?.value,
            password: RegisterPassword,
            email: (document.getElementById('emailRegister') as HTMLInputElement)?.value,
            phone: (document.getElementById('phoneRegister') as HTMLInputElement)?.value
        });
    };

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        LoginMutation.mutate({
            email: (document.getElementById('emailLogin') as HTMLInputElement)?.value,
            password: LoginPassword
        });
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton className='w-50 h-12 bg-[#90caf9] rounded-xl shadow-[0_0_100px_2px_rgba(144,202,249,0.2)]' value="login">Login</ToggleButton>
                    <ToggleButton className='w-50 h-12 bg-[#90caf9] rounded-xl shadow-[0_0_100px_2px_rgba(144,202,249,0.2)]' value="register">Register</ToggleButton>
                </ToggleButtonGroup>
                <div className='border-2 border-[#90caf9] rounded-xl shadow-[0_0_100px_2px_rgba(144,202,249,0.2)]'>
                    <div className={`w-110 h-115 flex-col items-center justify-center gap-6 p-5 ${alignment === 'register' ? 'flex' : 'hidden'}`}>
                        <TextField id="usernameRegister" label="Username" variant="outlined" name='username' className='w-full' />
                        <PasswordInput id='register' value={RegisterPassword} onChange={(value) => setRegisterPassword(value)} />
                        <TextField id="emailRegister" label="Email" variant="outlined" name='email' className='w-full' />
                        <TextField id="phoneRegister" label="Phone" variant="outlined" name='phone' className='w-full' />
                        <Button
                            variant="contained"
                            className='w-50 h-12'
                            onClick={handleRegister}
                        >Register</Button>
                    </div>
                    <div className={`w-110 h-90 flex-col items-center justify-center gap-10 p-10 ${alignment === 'login' ? 'flex' : 'hidden'}`}>
                        <TextField id="emailLogin" label="Email" variant="outlined" name='email' className='w-full' />
                        <PasswordInput id='login' value={LoginPassword} onChange={(value) => setLoginPassword(value)} />
                        <Button
                            variant="contained"
                            className='w-50 h-12'
                            onClick={handleLogin}
                        >Login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;