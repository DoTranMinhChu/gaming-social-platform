
import React from 'react';
import ReactLoading from 'react-loading';
import styles from './Loading.module.scss';

interface Props {
    isFirstLoading: boolean;
}

export default function Loading({ isFirstLoading }: Props) {
    return (
        <div className={styles.loading}>
            <ReactLoading
                type="spin"
                color={isFirstLoading ? '#111' : '#fff'}
                height={30}
                width={30}
            />
        </div>
    );
}
