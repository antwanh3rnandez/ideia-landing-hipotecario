import Container  from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import callToAction from '../assets/callToAction.jpg';

const Form = ({ }) => {

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // 
    //   };

    return (
        <div style={{  paddingTop: '50px', paddingBottom: '15px', background: 'white', width: '100%' }}>
            <Container 
                maxWidth="xl" 
                sx={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>              
                <Grid 
                    container 
                    sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginBottom: '15px'
                    }}>
                    <Grid item xs={12} md={12}>
                        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                            <Box width="100%" overflow="hidden" borderRadius="25px" height="400px">
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    clipPath: 'inset(0 0 0 0)',
                                    borderRadius: '25px',
                                    overflow: 'hidden',
                                }}>
                                    <img
                                        src={callToAction}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                        alt="Text"
                                    />
                                </div>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container 
                maxWidth="lg" 
            >
                <Grid container sx={{width: '100%'}}>
                    <Grid item xs={12} md={12} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography 
                            variant="h3" 
                            gutterBottom 
                            fontWeight={800} 
                            sx={{
                                fontFamily: 'Poppins, sans-serif', 
                                textAlign: 'center', 
                                my: '25px'}}
                            >
                        ¡Tu momento es ahora!
                        </Typography>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                margin: '0 auto',
                                marginBottom: '25px',
                                width: '25%',
                                borderRadius: '20px',
                                background: 'var(--secondary)',
                                paddingLeft: '30px',    
                                paddingRight: '30px',      
                                boxShadow: '2px 6px 4px rgba(0, 0, 0, 0.25)',                    
                                color: '#000',
                                '&:hover': {
                                    background: 'var(--dark-blue)',
                                    color: '#FFF'
                                } 
                            }}>
                                <Typography variant="h6" fontWeight={500} 
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', 
                                        textAlign: 'center'
                                    }}>
                                Solicitar Crédito
                                </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    );
};

export default Form;
