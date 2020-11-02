// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IFilterRefreshRequest {
    whitelist?: boolean;
}

export default class FilterRefreshRequest {
    readonly _whitelist: boolean | undefined;

    get whitelist(): boolean | undefined {
        return this._whitelist;
    }

    constructor(props: IFilterRefreshRequest) {
        if (typeof props.whitelist === 'boolean') {
            this._whitelist = props.whitelist;
        }
    }

    serialize(): IFilterRefreshRequest {
        const data: IFilterRefreshRequest = {
        };
        if (typeof this._whitelist !== 'undefined') {
            data.whitelist = this._whitelist;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            whitelist: !this._whitelist ? true : typeof this._whitelist === 'boolean',
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IFilterRefreshRequest): FilterRefreshRequest {
        return new FilterRefreshRequest(props);
    }
}
