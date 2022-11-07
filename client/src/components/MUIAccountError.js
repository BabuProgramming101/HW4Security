import { useContext } from 'react'
import AuthContext from '../auth'
import * as React from 'react';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

//WE WANT THIS MODAL TO ONLY BE TRIGGERED WHEN WE 

export default function MUIAccountError() {
    const { auth } = useContext(AuthContext);

    function handleClose(event) {
        auth.windowAlertOff();
    }

    return (
        <Modal  
            open={auth.parametersMet === false}
        >
         <Alert severity="error">{auth.alertStatus} <Button onClick={handleClose}> Close </Button></Alert>
         </Modal>
    );
}