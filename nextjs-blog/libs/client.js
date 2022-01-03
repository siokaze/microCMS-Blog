import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'siokaze',
    apiKey: process.env.API_KEY,
});