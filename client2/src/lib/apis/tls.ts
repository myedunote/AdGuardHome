import TlsConfig, { ITlsConfig } from 'Entities/TlsConfig';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export default class TlsApi {
    static async tlsConfigure(tlsconfig: ITlsConfig): Promise<ITlsConfig | string[] | Error> {
        const haveError: string[] = [];
        const tlsconfigValid = new TlsConfig(tlsconfig);
        haveError.push(...tlsconfigValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/control/tls/configure`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tlsconfigValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async tlsStatus(): Promise<ITlsConfig | Error> {
        return await fetch(`/control/tls/status`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async tlsValidate(tlsconfig: ITlsConfig): Promise<ITlsConfig | string[] | Error> {
        const haveError: string[] = [];
        const tlsconfigValid = new TlsConfig(tlsconfig);
        haveError.push(...tlsconfigValid.validate());
        if (haveError.length > 0) {
            return Promise.resolve(haveError);
        }
        return await fetch(`/control/tls/validate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tlsconfigValid.serialize()),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }
}
