import CheckConfigRequestInfo, { ICheckConfigRequestInfo } from './CheckConfigRequestInfo';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface ICheckConfigRequest {
    dns?: ICheckConfigRequestInfo;
    set_static_ip?: boolean;
    web?: ICheckConfigRequestInfo;
}

export default class CheckConfigRequest {
    readonly _dns: CheckConfigRequestInfo | undefined;

    get dns(): CheckConfigRequestInfo | undefined {
        return this._dns;
    }

    readonly _set_static_ip: boolean | undefined;

    get setStaticIp(): boolean | undefined {
        return this._set_static_ip;
    }

    readonly _web: CheckConfigRequestInfo | undefined;

    get web(): CheckConfigRequestInfo | undefined {
        return this._web;
    }

    constructor(props: ICheckConfigRequest) {
        if (props.dns) {
            this._dns = new CheckConfigRequestInfo(props.dns);
        }
        if (typeof props.set_static_ip === 'boolean') {
            this._set_static_ip = props.set_static_ip;
        }
        if (props.web) {
            this._web = new CheckConfigRequestInfo(props.web);
        }
    }

    serialize(): ICheckConfigRequest {
        const data: ICheckConfigRequest = {
        };
        if (typeof this._dns !== 'undefined') {
            data.dns = this._dns.serialize();
        }
        if (typeof this._set_static_ip !== 'undefined') {
            data.set_static_ip = this._set_static_ip;
        }
        if (typeof this._web !== 'undefined') {
            data.web = this._web.serialize();
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            dns: !this._dns ? true : this._dns.validate().length === 0,
            web: !this._web ? true : this._web.validate().length === 0,
            set_static_ip: !this._set_static_ip ? true : typeof this._set_static_ip === 'boolean',
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: ICheckConfigRequest): CheckConfigRequest {
        return new CheckConfigRequest(props);
    }
}
