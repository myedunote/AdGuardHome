// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IServerStatus {
    dhcp_available?: boolean;
    dns_address: string;
    dns_port: number;
    language: string;
    protection_enabled: boolean;
    querylog_enabled: boolean;
    running: boolean;
    version: string;
}

export default class ServerStatus {
    readonly _dhcp_available: boolean | undefined;

    get dhcpAvailable(): boolean | undefined {
        return this._dhcp_available;
    }

    readonly _dns_address: string;

    /**
     * Description: undefined
     * Example: 127.0.0.1
     */
    get dnsAddress(): string {
        return this._dns_address;
    }

    static dnsAddressValidate(dnsAddress: string): boolean {
        return typeof dnsAddress === 'string' && !!dnsAddress.trim();
    }

    readonly _dns_port: number;

    /**
     * Description: undefined
     * Example: 53
     */
    get dnsPort(): number {
        return this._dns_port;
    }

    static get dnsPortMinValue() {
        return 1;
    }

    static get dnsPortMaxValue() {
        return 65535;
    }

    static dnsPortValidate(dnsPort: number): boolean {
        return dnsPort >= 1 && dnsPort <= 65535;
    }

    readonly _language: string;

    /**
     * Description: undefined
     * Example: en
     */
    get language(): string {
        return this._language;
    }

    static languageValidate(language: string): boolean {
        return typeof language === 'string' && !!language.trim();
    }

    readonly _protection_enabled: boolean;

    get protectionEnabled(): boolean {
        return this._protection_enabled;
    }

    static protectionEnabledValidate(protectionEnabled: boolean): boolean {
        return typeof protectionEnabled === 'boolean';
    }

    readonly _querylog_enabled: boolean;

    get querylogEnabled(): boolean {
        return this._querylog_enabled;
    }

    static querylogEnabledValidate(querylogEnabled: boolean): boolean {
        return typeof querylogEnabled === 'boolean';
    }

    readonly _running: boolean;

    get running(): boolean {
        return this._running;
    }

    static runningValidate(running: boolean): boolean {
        return typeof running === 'boolean';
    }

    readonly _version: string;

    /**
     * Description: undefined
     * Example: 0.1
     */
    get version(): string {
        return this._version;
    }

    static versionValidate(version: string): boolean {
        return typeof version === 'string' && !!version.trim();
    }

    constructor(props: IServerStatus) {
        if (typeof props.dhcp_available === 'boolean') {
            this._dhcp_available = props.dhcp_available;
        }
        this._dns_address = props.dns_address.trim();
        this._dns_port = props.dns_port;
        this._language = props.language.trim();
        this._protection_enabled = props.protection_enabled;
        this._querylog_enabled = props.querylog_enabled;
        this._running = props.running;
        this._version = props.version.trim();
    }

    serialize(): IServerStatus {
        const data: IServerStatus = {
            dns_address: this._dns_address,
            dns_port: this._dns_port,
            language: this._language,
            protection_enabled: this._protection_enabled,
            querylog_enabled: this._querylog_enabled,
            running: this._running,
            version: this._version,
        };
        if (typeof this._dhcp_available !== 'undefined') {
            data.dhcp_available = this._dhcp_available;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            dns_address: typeof this._dns_address === 'string' && !this._dns_address ? true : this._dns_address,
            dns_port: this._dns_port >= 1 && this._dns_port <= 65535,
            protection_enabled: typeof this._protection_enabled === 'boolean',
            dhcp_available: !this._dhcp_available ? true : typeof this._dhcp_available === 'boolean',
            querylog_enabled: typeof this._querylog_enabled === 'boolean',
            running: typeof this._running === 'boolean',
            version: typeof this._version === 'string' && !this._version ? true : this._version,
            language: typeof this._language === 'string' && !this._language ? true : this._language,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IServerStatus): ServerStatus {
        return new ServerStatus(props);
    }
}
