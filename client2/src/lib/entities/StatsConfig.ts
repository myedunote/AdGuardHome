// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IStatsConfig {
    interval?: number;
}

export default class StatsConfig {
    readonly _interval: number | undefined;

    /** */
    get interval(): number | undefined {
        return this._interval;
    }

    constructor(props: IStatsConfig) {
        if (typeof props.interval === 'number') {
            this._interval = props.interval;
        }
    }

    serialize(): IStatsConfig {
        const data: IStatsConfig = {
        };
        if (typeof this._interval !== 'undefined') {
            data.interval = this._interval;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            interval: !this._interval ? true : typeof this._interval === 'number',
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IStatsConfig): StatsConfig {
        return new StatsConfig(props);
    }
}
