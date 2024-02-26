// environment.ts

export interface Environment {
    production: boolean;
    weatherApiBaseUrl: string;
    XRapidAPIHostHeaderName: string;
    XRapidAPIHostHeaderValue: string;
    XRapidAPIKeyHeaderName: string;
    XRapidAPIKeyHeaderValue: string;
}

export const environment: Environment = {
    production: false,
    weatherApiBaseUrl: 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13',
    XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
    XRapidAPIHostHeaderValue: 'weatherapi-com.p.rapidapi.com',
    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: '683444e2fdmshf25051cde889582p158d3ejsn42d75ec90dc8',
};
