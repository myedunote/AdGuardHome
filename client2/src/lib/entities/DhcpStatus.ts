import DhcpConfigV4, { IDhcpConfigV4 } from './DhcpConfigV4';
import DhcpConfigV6, { IDhcpConfigV6 } from './DhcpConfigV6';
import DhcpLease, { IDhcpLease } from './DhcpLease';
import DhcpStaticLease, { IDhcpStaticLease } from './DhcpStaticLease';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IDhcpStatus {
    enabled?: boolean;
    interface_name?: string;
    leases: IDhcpLease[];
    static_leases?: IDhcpStaticLease[];
    v4?: IDhcpConfigV4;
    v6?: IDhcpConfigV6;
}

export default class DhcpStatus {
    readonly _enabled: boolean | undefined;

    get enabled(): boolean | undefined {
        return this._enabled;
    }

    readonly _interface_name: string | undefined;

    get interfaceName(): string | undefined {
        return this._interface_name;
    }

    readonly _leases: DhcpLease[];

    get leases(): DhcpLease[] {
        return this._leases;
    }

    readonly _static_leases: DhcpStaticLease[] | undefined;

    get staticLeases(): DhcpStaticLease[] | undefined {
        return this._static_leases;
    }

    readonly _v4: DhcpConfigV4 | undefined;

    get v4(): DhcpConfigV4 | undefined {
        return this._v4;
    }

    readonly _v6: DhcpConfigV6 | undefined;

    get v6(): DhcpConfigV6 | undefined {
        return this._v6;
    }

    constructor(props: IDhcpStatus) {
        if (typeof props.enabled === 'boolean') {
            this._enabled = props.enabled;
        }
        if (typeof props.interface_name === 'string') {
            this._interface_name = props.interface_name.trim();
        }
        this._leases = props.leases.map((p) => new DhcpLease(p));
        if (props.static_leases) {
            this._static_leases = props.static_leases.map((p) => new DhcpStaticLease(p));
        }
        if (props.v4) {
            this._v4 = new DhcpConfigV4(props.v4);
        }
        if (props.v6) {
            this._v6 = new DhcpConfigV6(props.v6);
        }
    }

    serialize(): IDhcpStatus {
        const data: IDhcpStatus = {
            leases: this._leases.map((p) => p.serialize()),
        };
        if (typeof this._enabled !== 'undefined') {
            data.enabled = this._enabled;
        }
        if (typeof this._interface_name !== 'undefined') {
            data.interface_name = this._interface_name;
        }
        if (typeof this._static_leases !== 'undefined') {
            data.static_leases = this._static_leases.map((p) => p.serialize());
        }
        if (typeof this._v4 !== 'undefined') {
            data.v4 = this._v4.serialize();
        }
        if (typeof this._v6 !== 'undefined') {
            data.v6 = this._v6.serialize();
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            enabled: !this._enabled ? true : typeof this._enabled === 'boolean',
            interface_name: !this._interface_name ? true : typeof this._interface_name === 'string' && !this._interface_name ? true : this._interface_name,
            v4: !this._v4 ? true : this._v4.validate().length === 0,
            v6: !this._v6 ? true : this._v6.validate().length === 0,
            leases: this._leases.reduce((result, p) => result && p.validate().length === 0, true),
            static_leases: !this._static_leases ? true : this._static_leases.reduce((result, p) => result && p.validate().length === 0, true),
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IDhcpStatus): DhcpStatus {
        return new DhcpStatus(props);
    }
}
