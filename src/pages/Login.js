import { useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    Container,
    TextField,
    Grid,
    Link,
    Divider,
    Typography,
    Button
} from '@mui/material'

const Login = () => {
    const [name] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = async (e) => {
        try {
            const userData = await axios.post('https://localhost:7050/api/Users/api/Users/login', { name: name, email: email, password: password })

            localStorage.setItem('userName', userData.data.name)
            localStorage.setItem('userId', userData.data.id)

            window.location.href = "/";
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container className='loginContainer'>
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                    <Grid item xs={12}>
                        <center>
                            <img alt="..." src={require('../images/ktun-logo.png')} />
                        </center>
                    </Grid>
                    <Grid item xs={10}>
                        <Card>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <Typography className='loginHeader'>
                                            Giriş Yap
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth type="email" name="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Email" sx={{ marginTop: '20px' }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth type="password" name="password" onChange={(e) => setPassword(e.target.value)} required placeholder="Parola" sx={{ marginBottom: '20px', }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button className='loginButton' type="submit" onClick={(e) => loginSubmit(e)} size='large' fullWidth>
                                            <Typography className='loginButtonTitle'>
                                                Giriş Yap
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={0.4}>
                                        <Typography>veya</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Link href='register'>
                                            <Button className='loginButton' size='large' fullWidth>
                                                <Typography className='loginButtonTitle'>
                                                    Yeni Öğrenci
                                                </Typography>
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Login