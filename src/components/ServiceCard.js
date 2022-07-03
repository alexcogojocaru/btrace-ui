import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

import TraceCard from './TraceCard';
import { useEffect, useState } from 'react';

export default function ServiceCard(props) {
    const [traces, setTraces] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/api/service/${props.name}/data`)
            .then(response => response.json())
            .then(data => setTraces(data.traces))
    }, []);

    let traceCards = [];
    Object.keys(traces).forEach(traceId => 
        traceCards.push(<TraceCard traceId={traceId} spans={traces[traceId]} />)
    );

    return (
        <Box sx={{
            marginLeft: '20px',
            marginRight: '20px',
            marginTop: '10px'
        }}>
            <Accordion sx={{
                marginTop: '10px'
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>ServiceName: {props.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {traceCards}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}