import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import messagesEN from '../src/messages/en.json';
import { Decorator } from '@storybook/react';

// Create a mock messages object for translations
const messages = messagesEN;

// Create a light/dark mode wrapper component
const ThemeWrapper = ({ 
  children, 
  theme 
}: { 
  children: React.ReactNode; 
  theme: 'light' | 'dark' 
}) => {
  // Force theme class on document element
  React.useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.classList.remove('light', 'dark');
    htmlEl.classList.add(theme);
    
    return () => {
      htmlEl.classList.remove(theme);
    };
  }, [theme]);
  
  return (
    <div 
      className={`${theme} p-4`}
      style={{
        backgroundColor: theme === 'dark' ? '#1a0505' : '#ffffff',
        color: theme === 'dark' ? '#f8fafc' : '#0f172a',
        maxWidth: '100%',
        minHeight: '100px',
        borderRadius: '8px'
      }}
    >
      {children}
    </div>
  );
};

// Decorator to provide the necessary i18n and theme context with light theme
export const WithProviders: Decorator = (Story) => (
  <NextIntlClientProvider locale="en" messages={messages}>
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <ThemeWrapper theme="light">
        <Story />
      </ThemeWrapper>
    </ThemeProvider>
  </NextIntlClientProvider>
);

// Decorator to provide the necessary i18n and theme context with dark theme
export const WithDarkTheme: Decorator = (Story) => (
  <NextIntlClientProvider locale="en" messages={messages}>
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <ThemeWrapper theme="dark">
        <Story />
      </ThemeWrapper>
    </ThemeProvider>
  </NextIntlClientProvider>
);