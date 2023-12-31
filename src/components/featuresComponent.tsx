import Container  from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';

const Features = ({ }) => {

    const url = import.meta.env.VITE_URL_BUTTON;

    return (
        <div style={{ width:'100%', background: 'white' }}>
            <Container 
                sx={{
                    height: '100%',
                    my: '55px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                    <Typography 
                        variant="h3" 
                        gutterBottom fontWeight={800} 
                        sx={{
                            fontFamily: 'Poppins, sans-serif', 
                            textAlign: 'center', 
                            marginBottom: '25px'
                        }}>
                    El crédito hipotecario que mereces<br/>a la medida de tus posibilidades.
                    </Typography>
                    <Typography 
                        variant="h5" 
                        gutterBottom fontWeight={800} 
                        sx={{
                            fontFamily: 'Poppins, sans-serif', 
                            textAlign: 'center', 
                            marginBottom: '25px'
                        }}>
                    Ofrecemos créditos hipotecarios de acuerdo a tus necesidades:
                    </Typography>
                    <Grid container spacing={4} sx={{height: '100%'}}>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                borderRadius: '15px',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                                overflow: 'hidden',
                                height: '100%',
                                }}
                            >
                                <div
                                    style={{
                                        width: '100%',
                                        height: '180px',
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        backgroundColor: 'black',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <img
                                        src={card1}
                                        alt="Card Image"
                                        style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        maxHeight: '264px', //240,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        flex: '1',
                                        padding: '15px',
                                        // overflowY: 'scroll'
                                    }}
                                >
                                    <Typography
                                        fontSize={18}
                                        fontWeight={800}
                                        sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center',
                                        marginBottom: '15px',
                                        }}
                                    >
                                        Crédito de adquisición
                                    </Typography>
                                    <Typography
                                        fontSize={16}
                                        fontWeight={500}
                                        sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center',
                                        }}
                                    >
                                        Estrena tu nuevo hogar con un crédito adaptado a ti.<br/><br/>
                                        &bull; Crédito Bancario<br/>
                                        &bull; Apoyo Infonavit<br/>
                                        &bull; Crédito Cofinavit<br/>
                                        &bull; Crédito FOVISSSTE
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                borderRadius: '15px',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                                overflow: 'hidden',
                                height: '100%',
                                }}
                            >
                                <div
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px',
                                    backgroundColor: 'black',
                                    overflow: 'hidden',
                                }}
                                >
                                    <img
                                        src={card2}
                                        alt="Card Image"
                                        style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        flex: '1',
                                        padding: '15px',
                                    }}
                                >
                                    <Typography
                                        fontSize={18}
                                        fontWeight={800}
                                        sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center',
                                        marginBottom: '15px',
                                        }}
                                    >
                                        Crédito para terreno
                                    </Typography>
                                    <Typography
                                        fontSize={16}
                                        fontWeight={500}
                                        sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center',
                                        }}
                                    >
                                        El lugar donde deseas que tu patrimonio crezca, adquiérelo con las mejores condiciones.
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                borderRadius: '15px',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                                overflow: 'hidden',
                                height: '100%',
                                }}
                            >
                                <div
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px',
                                    backgroundColor: 'black',
                                    overflow: 'hidden',
                                }}
                                >
                                    <img
                                        src={card3}
                                        alt="Card Image"
                                        style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        flex: '1',
                                        padding: '15px',
                                    }}
                                >
                                    <Typography
                                        fontSize={18}
                                        fontWeight={800}
                                        sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center',
                                        marginBottom: '15px',
                                        }}
                                    >
                                        Crédito de construcción
                                    </Typography>
                                    <Typography
                                        fontSize={16}
                                        fontWeight={500}
                                        sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center',
                                        }}
                                    >
                                        Obtén el crédito para que construyas en el lugar que siempre has querido.
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                borderRadius: '15px',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                                overflow: 'hidden',
                                height: '100%',
                                }}
                            >
                                <div
                                style={{
                                    width: '100%',
                                    height: '180px',
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px',
                                    backgroundColor: 'black',
                                    overflow: 'hidden',
                                }}
                                >
                                    <img
                                        src={card4}
                                        alt="Card Image"
                                        style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        flex: '1',
                                        padding: '15px',
                                    }}
                                >
                                    <Typography
                                        fontSize={18}
                                        fontWeight={800}
                                        sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center',
                                        marginBottom: '15px',
                                        }}
                                    >
                                        Crédito de liquidez
                                    </Typography>
                                    <Typography
                                        fontSize={16}
                                        fontWeight={500}
                                        sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        textAlign: 'center',
                                        }}
                                    >
                                        Obtén los fondos necesarios para cualquier imprevisto al utilizar su casa como garantía.
                                    </Typography>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                        <Button 
                            href={url}
                            variant="contained" 
                            sx={{ 
                                margin: '0 auto',
                                marginTop: '30px',
                                borderRadius: '20px',
                                background: 'var(--secondary)',
                                paddingLeft: '30px',    
                                paddingRight: '30px',      
                                boxShadow: '2px 6px 4px rgba(0, 0, 0, 0.25)',                    
                                color: '#000',
                                '&:hover': {
                                    background: 'var(--primary)',
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
            </Container>

        </div>
      
    );
  };
  
  

export default Features;
