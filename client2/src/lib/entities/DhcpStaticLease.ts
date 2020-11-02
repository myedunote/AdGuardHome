// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IDhcpStaticLease {
    hostname: string;
    ip: string;
    mac: string;
}

export default class DhcpStaticLease {
    readonly _hostname: string;

    /**
     * Description: undefined
     * Example: dell
     */
    get hostname(): string {
        return this._hostname;
    }

    static hostnameValidate(hostname: string): boolean {
        return typeof hostname === 'string' && !!hostname.trim();
    }

    readonly _ip: string;

    /**
     * Description: undefined
     * Example: 192.168.1.22
     */
    get ip(): string {
        return this._ip;
    }

    static ipValidate(ip: string): boolean {
        return typeof ip === 'string' && !!ip.trim();
    }

    readonly _mac: string;

    /**
     * Description: undefined
     * Example: 00:11:09:b3:b3:b8
     */
    get mac(): string {
        return this._mac;
    }

    static macValidate(mac: string): boolean {
        return typeof mac === 'string' && !!mac.trim();
    }

    constructor(props: IDhcpStaticLease) {
        this._hostname = props.hostname.trim();
        this._ip = props.ip.trim();
        this._mac = props.mac.trim();
    }

    serialize(): IDhcpStaticLease {
        const data: IDhcpStaticLease = {
            hostname: this._hostname,
            ip: this._ip,
            mac: this._mac,
        };
        return data;
    }

    validate(): string[] {
        const validate = {
            mac: typeof this._mac === 'string' && !this._mac ? true : this._mac,
            ip: typeof this._ip === 'string' && !this._ip ? true : this._ip,
            hostname: typeof this._hostname === 'string' && !this._hostname ? true : this._hostname,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IDhcpStaticLease): DhcpStaticLease {
        return new DhcpStaticLease(props);
    }
}
