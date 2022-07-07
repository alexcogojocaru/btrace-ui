import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SpanCard from './SpanCard';

export default function TraceCard(props) {
    let spanCards = [];
    props.spans.forEach(span => spanCards.push(<SpanCard key={span.ID} spanId={span.ID} parentId={span.ParentID} name={span.Name} time={span.Time} logs={span.Logs} />));

    return (
        <Accordion sx={{
            marginBottom: '10px'
        }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>TraceID: {props.traceId}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {spanCards}
            </AccordionDetails>
        </Accordion>
    );
}