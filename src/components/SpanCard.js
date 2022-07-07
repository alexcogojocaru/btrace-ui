import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import LogCard from './LogCard';

function getTimeFromDate(datetime) {
    return datetime.split('.')[0];
}

export default function SpanCard(props) {

    return (
        <Card sx={{ minWidth: 275, marginBottom: '10px' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Started: {getTimeFromDate(props.time.Started)}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Ended: {getTimeFromDate(props.time.Ended)}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Duration: {props.time.Duration}ms
                </Typography>
                <Typography variant="h5" component="div">
                    SpanID: {props.spanId}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Name: {props.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Parent: {props.parentId}
                </Typography>
                <Typography>
                    {(props.logs !== null) && props.logs.map(log => <LogCard type={log.Type} value={log.Value} />)}
                </Typography>
            </CardContent>
        </Card>
    );
}