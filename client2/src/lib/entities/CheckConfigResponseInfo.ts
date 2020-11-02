// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface ICheckConfigResponseInfo {
    can_autofix?: boolean;
    status?: string;
}

export default class CheckConfigResponseInfo {
    readonly _can_autofix: boolean | undefined;

    get canAutofix(): boolean | undefined {
        return this._can_autofix;
    }

    readonly _status: string | undefined;

    get status(): string | undefined {
        return this._status;
    }

    constructor(props: ICheckConfigResponseInfo) {
        if (typeof props.can_autofix === 'boolean') {
            this._can_autofix = props.can_autofix;
        }
        if (typeof props.status === 'string') {
            this._status = props.status.trim();
        }
    }

    serialize(): ICheckConfigResponseInfo {
        const data: ICheckConfigResponseInfo = {
        };
        if (typeof this._can_autofix !== 'undefined') {
            data.can_autofix = this._can_autofix;
        }
        if (typeof this._status !== 'undefined') {
            data.status = this._status;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            status: !this._status ? true : typeof this._status === 'string' && !this._status ? true : this._status,
            can_autofix: !this._can_autofix ? true : typeof this._can_autofix === 'boolean',
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: ICheckConfigResponseInfo): CheckConfigResponseInfo {
        return new CheckConfigResponseInfo(props);
    }
}
