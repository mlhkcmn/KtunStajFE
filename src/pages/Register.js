import { useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    Container,
    TextField,
    Grid,
    Typography,
    Button
} from '@mui/material'

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const registerSubmit = async (e) => {
        try {
            await axios.post('https://localhost:7050/api/Users', {name: name , email: email , password: password})

            localStorage.setItem('firstLogin', "true")

            window.location.href = "/";
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container className='registerSection'>
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                    <Grid item xs={12}>
                        <center>
                            <img alt="..." src={require('../images/ktun-logo.png')} />
                        </center>
                    </Grid>
                    <Grid item xs={10}>
                        <Card onSubmit={registerSubmit}>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <Typography className='registerHeader'>
                                            Kayıt Ol
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth name='name' label="İsim-Soyisim" value={name} type="name" onChange={(e) => setName(e.target.value)} sx={{ marginTop: '20px' }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* <TextField size="medium" fullWidth name='name' label="Okul Numarası" type="text" /> */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth name='email' label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth name='password' label="Şifre" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button className='registerButton' onClick={(e) => registerSubmit(e)} type="submit" size='large' fullWidth>
                                            <Typography className='registerButtonTitle'>
                                                Kayıt Ol
                                            </Typography>
                                        </Button>
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

export default Register