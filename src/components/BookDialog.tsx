import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

export default function BookDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Book now
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Book now</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your email address to book now.
                    </DialogContentText>
                    <DemoItem label="1 calendar">
                        <DateRangeCalendar calendars={1} />
                    </DemoItem>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Book now</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
