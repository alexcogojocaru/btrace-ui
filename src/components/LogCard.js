import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import { ListItemIcon } from '@mui/material';

export default function LogCard(props) {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            <ListItem>
                <ListItemIcon>
                    {
                        (props.type === "INFO") ? <InfoIcon color="success" /> : 
                        (props.type === "WARNING") ? <WarningIcon color="warning" /> : <ErrorIcon color="error" />
                    }
                </ListItemIcon>
                <ListItemText primary={props.value} />
            </ListItem>
                    {/* <Divider variant="inset" component="li" /> */}
        </List>
    );
}