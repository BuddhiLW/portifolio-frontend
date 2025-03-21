import { getRequestConfig } from 'next-intl/server';
import type { GetRequestConfigParams } from 'next-intl/server';

export default getRequestConfig(async ({ locale = 'pt-BR' }: GetRequestConfigParams) => {
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: 'America/Sao_Paulo'
  };
}); 