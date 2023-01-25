import { Container, Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import imag from '../../../img/undraw_questions_re_1fy7.svg'

const FAQ = () => {
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 'bold', marginY: '40px' }}>
                Frequently Asked Questions
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                <Grid item xs={12} md={6}>
                    <div>
                        <img style={{ width: '100%' }} src={imag} alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography>Why should I travel?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Many people enjoy visiting new places and experiencing new things. They may be drawn to the thrill of adventure, the excitement of trying new activities, or the challenge of exploring new environments.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>Is travel relaxation and rejuvenation?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    For others, travel is an opportunity to escape from the stresses of daily life and relax in a new and different environment. This could be a beach vacation, a spa getaway, or a trip to a peaceful and secluded destination.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Typography>Can travel help personal growth?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Travel can also be an opportunity for personal growth and self-discovery. It can help people to build self-confidence, challenge themselves, and gain a new perspective on their own lives and values.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                                <Typography>Is traveling costly?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The cost of a trip depends on a variety of factors, including the destination, the length of the trip, and the type of accommodations and activities you choose.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                                <Typography>Strong bonding with family and friends</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Travelling with family and friends can be a great way to spend time together and create lasting memories. It can also be an opportunity to bond and strengthen relationships.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FAQ;