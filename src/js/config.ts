interface Window {
    SERVER_CONFIG: {
        name: string;
        domain: string;
        wss: string;
        sasl: string;
        securePasswordStorage: boolean;
        muc: string;
        startup: string;
        admin: string;
        keepalive: {
            interval: number;
            timeout: number;
        }
    }
}
