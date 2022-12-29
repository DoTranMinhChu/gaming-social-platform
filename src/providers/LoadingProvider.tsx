import React, { useState } from 'react';
import { LoadingContext } from '../context/LoadingContext';

const LoadingProvider = (props: any) => {
    const [loading, setLoading] = useState<boolean>(true);
    return (
        <LoadingContext.Provider
            value={{
                loading: loading,
                showLoading: () => setLoading(true),
                setTimeout: () => setLoading(false)
            }}>
            {props.children}

        </LoadingContext.Provider>
    )
}

export { LoadingProvider }