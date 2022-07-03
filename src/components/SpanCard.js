import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import LogCard from './LogCard';

export default function SpanCard(props) {
    // console.log(`${props.spanId} ${props.logs}`);
    // let logCards = [];

    return (
        <Card sx={{ minWidth: 275, marginBottom: '10px' }}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Duration: 2ms
                </Typography> */}
                <Typography variant="h5" component="div">
                    SpanID: {props.spanId}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Name: {props.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Parent: {props.parentId}
                </Typography>
                {/* <Typography>
                    <LogCard type="ERROR" value="testing route" />
                </Typography> */}
            </CardContent>
        </Card>
    );
}