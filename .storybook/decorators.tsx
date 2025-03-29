import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import messagesEN from '../src/messages/en.json'; // Adjust the path as necessary
import { Decorator } from '@storybook/react';

// Create a mock messages object for translations
const messages = messagesEN;

// Decorator to provide the necessary i18n and theme context with light theme
export const WithProviders: Decorator = (Story) => (
	<NextIntlClientProvider locale="en" messages={messages}>
		<ThemeProvider attribute="class" defaultTheme="light">
			<div className="p-4">
				<Story />
			</div>
		</ThemeProvider>
	</NextIntlClientProvider>
);

// Decorator to provide the necessary i18n and theme context with dark theme
export const WithDarkTheme: Decorator = (Story) => (
	<NextIntlClientProvider locale="en" messages={messages}>
		<ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
			<div className="p-4 bg-slate-900">
				<Story />
			</div>
		</ThemeProvider>
	</NextIntlClientProvider>
);