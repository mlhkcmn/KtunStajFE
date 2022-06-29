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
    // const [name, setName] = useState<String>();
    // const [email, setEmail] = useState<String>();
    // const [password, setPassword] = useState<String>();

    // const registerSubmit = async (e: { preventDefault: () => void }) => {
    //     e.preventDefault()
    //     try {
    //         await axios.post('https://localhost:7050/api/Users', {name: name , email: email , password: password})

    //         localStorage.setItem('firstLogin', "true")

    //         window.location.href = "/";
    //     } catch (err: any) {
    //         console.log(err);
    //     }
    // }

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
                        <Card>
                            <CardContent>
                                <Grid container spacing={1} justifyContent="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <Typography className='registerHeader'>
                                            Kayıt Ol
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth name='name' label="İsim-Soyisim" type="text" sx={{ marginTop: '20px' }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth name='name' label="Okul Numarası" type="text" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth name='email' label="Email" type="email" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="medium" fullWidth name='password' label="Şifre" type="password" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button className='registerButton' type="submit" size='large' fullWidth>
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