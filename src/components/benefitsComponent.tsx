import Container  from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { IconDeviceLaptop } from '@tabler/icons-react';
import { IconHomeDollar } from '@tabler/icons-react';
import { IconBrowserCheck } from '@tabler/icons-react';
import { IconHomeShield } from '@tabler/icons-react';

import card1 from '../assets/card1.jpg';

const Benefits = ({ }) => {

    return (
        <div style={{  paddingTop: '50px', paddingBottom: '15px', background: 'var(--primary)', color: 'white', width: '100%' }}>
            <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>              
                <Grid container sx={{display: 'flex', justifyContent: 'start', alignItems: 'center', textAlign: 'start'}}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3" gutterBottom fontWeight={800} sx={{fontFamily: 'Poppins, sans-serif', marginBottom: '10px', color: 'var(--secondary)'}}>
                        Beneficios del trámite de nuestros
                        </Typography>
                        <Typography variant="h3" gutterBottom fontWeight={800} sx={{fontFamily: 'Poppins, sans-serif', marginBottom: '45px', color: 'var(--secondary)'}}>
                        Créditos Hipotecarios
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px' }}>   
                <Grid container spacing={6} sx={{height: '100%'}}>
                    <Grid item xs={12} md={3}>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent:'center', 
                                alignItems: 'center', 
                                height: '100%'
                            }}>
                            <IconDeviceLaptop size={128}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={500} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                Proceso del trámite de tu crédito en línea.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent:'center', 
                                alignItems: 'center', 
                                height: '100%'
                            }}>
                            <IconHomeDollar size={128}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={500} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                Conoce diversas opciones de crédito de acuerdo a tus necesidades.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent:'center', 
                                alignItems: 'center', 
                                height: '100%'
                            }}>
                            <IconBrowserCheck size={128}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={500} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                CRM en tiempo real para visualizar el proceso de tu crédito.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent:'center', 
                                alignItems: 'center', 
                                height: '100%'
                            }}>
                            <IconHomeShield size={128}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={500} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                Tus datos de mantienen asegurado en todo momento.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Benefits;
