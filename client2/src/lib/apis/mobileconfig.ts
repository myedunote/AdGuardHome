// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export default class MobileconfigApi {
    static async mobileConfigDoH(): Promise<number | Error> {
        return await fetch(`/control/apple/doh.mobileconfig`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async mobileConfigDoT(): Promise<number | Error> {
        return await fetch(`/control/apple/dot.mobileconfig`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }
}
