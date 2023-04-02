import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button, Grid } from '@mui/material';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(15).required()
}).required();


export default function Login() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode:'onTouched',
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => console.log(data);
    return (
        <React.Fragment>
            <CssBaseline />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container sx={{ maxWidth: "600px !important", height: "100vh" }}>
                    <Stack
                        sx={{ height: "100%" }}
                        spacing={2}
                        direction={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <h1>Login</h1>
                        <TextField
                            error={errors.email?.message ? true : false}
                            label="Email *"
                            {...register("email")}
                            fullWidth
                            helperText={errors.email?.message?.toString()}
                        />

                        <TextField
                            error={errors.password?.message ? true : false}
                            label="Password *"
                            {...register("password")}
                            fullWidth
                            helperText={errors.password?.message?.toString()}
                        />
                        <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                            <Grid item md={2}>
                                <Button variant="outlined" size="medium" type='submit' disabled={!isValid}>
                                    Login
                                </Button>

                            </Grid>
                            <Grid item md={2}>
                                <Button variant="outlined" size="medium" color="error" type='reset'>
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </form>
        </React.Fragment>
    );
}