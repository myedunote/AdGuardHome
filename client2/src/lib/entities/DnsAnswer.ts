// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IDnsAnswer {
    ttl?: number;
    type?: string;
    value?: string;
}

export default class DnsAnswer {
    readonly _ttl: number | undefined;

    /**
     * Description: undefined
     * Example: 55
     */
    get ttl(): number | undefined {
        return this._ttl;
    }

    readonly _type: string | undefined;

    /**
     * Description: undefined
     * Example: A
     */
    get type(): string | undefined {
        return this._type;
    }

    readonly _value: string | undefined;

    /**
     * Description: undefined
     * Example: 217.69.139.201
     */
    get value(): string | undefined {
        return this._value;
    }

    constructor(props: IDnsAnswer) {
        if (typeof props.ttl === 'number') {
            this._ttl = props.ttl;
        }
        if (typeof props.type === 'string') {
            this._type = props.type.trim();
        }
        if (typeof props.value === 'string') {
            this._value = props.value.trim();
        }
    }

    serialize(): IDnsAnswer {
        const data: IDnsAnswer = {
        };
        if (typeof this._ttl !== 'undefined') {
            data.ttl = this._ttl;
        }
        if (typeof this._type !== 'undefined') {
            data.type = this._type;
        }
        if (typeof this._value !== 'undefined') {
            data.value = this._value;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            ttl: !this._ttl ? true : typeof this._ttl === 'number',
            type: !this._type ? true : typeof this._type === 'string' && !this._type ? true : this._type,
            value: !this._value ? true : typeof this._value === 'string' && !this._value ? true : this._value,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IDnsAnswer): DnsAnswer {
        return new DnsAnswer(props);
    }
}
