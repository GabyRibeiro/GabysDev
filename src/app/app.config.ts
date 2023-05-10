// Types
export type Theme = 'auto' | 'dark' | 'light';

export interface AppConfig
{
    theme: Theme;
}

export const appConfig: AppConfig = {
  theme : 'dark',
};
