import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { AlertContext } from 'context/AlertContext';

const AlertProvider = (props: any) => {
    const [alert, setAlert] = useState({
        open: false,
        type: null,
        content: '',
    });

    return (
        <AlertContext.Provider
            value={{
                alert: alert,
                showAlert: (data: any) =>
                    setAlert({
                        ...data,
                        open: true,
                    }),
            }}
        >
            {alert.open && alert.type && (
                <Snackbar
                    open={alert.open}
                    onClose={() =>
                        setAlert({
                            open: false,
                            type: null,
                            content: '',
                        })
                    }
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        severity={alert.type}
                        sx={{ display: 'flex', alignItems: 'center', fontSize: 16 }}
                    >
                        {alert.content}
                    </Alert>
                </Snackbar>
            )}
            {props.children}
        </AlertContext.Provider>
    );
};

export { AlertProvider };
