import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LOCAL_STORAGE } from 'constants/localStorageConstants';
import { useEffect } from 'react';
import axiosClient from 'api/axiosClient';
import { LoadingProvider } from 'providers/LoadingProvider';
import UserProvider from 'providers/UserProvider';
import i18n from '../translation/i18n';
import { I18nextProvider } from 'react-i18next';
import ThemeProvider from 'themes';

export default function App({ Component, pageProps }: AppProps) {

  const handleLogout = () => {
    sessionStorage.removeItem(LOCAL_STORAGE.USER_INFO);
    localStorage.removeItem(LOCAL_STORAGE.USER_TOKEN);
  };
  const checkToken = async () => {
    try {
      const token = localStorage.getItem(LOCAL_STORAGE.USER_TOKEN);
      await axiosClient.get('user/check_expired', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: any) {
      if (error?.response?.data?.code === 401) handleLogout();
    }
  };

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('currentLanguage') || 'kr');
    if (localStorage.getItem(LOCAL_STORAGE.USER_TOKEN)) {
      checkToken();
    }
  }, [])

  return (
    <LoadingProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </ThemeProvider>
      </I18nextProvider>

    </LoadingProvider>

  )
}

