export function nFormatter(num: number) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

export const CalculateTotal = (data: any) => {
    let min = 0;
    let max = 0;
    data?.map((item: any) => {
        min += item?.min_quantity;
        max += item?.max_quantity;
    });
    return `${min} / ${max}`;
};

export const numberWithCommas = (x: any) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getPhoneWithDash = (x: string) => {
    const y = x?.replace(/,/g, '');

    let res = '';
    let count = 0;
    for (let i = y?.length - 1; i >= 0; i--) {
        res = y.charAt(i) + res;
        count++;
        if (count % 4 === 0 && i !== 0) res = `-${res}`;
    }
    return res;
};

export const getPhoneWithoutDash = (x: string) => {
    const y = x?.replace(/-/g, '');
    return y;
};

export const hideEmail = (email: string) => {
    return email.replace(/(.{2})(.*)(?=@)/, function (gp1, gp2, gp3) {
        for (let i = 0; i < gp3.length; i++) {
            gp2 += '*';
        }
        return gp2;
    });
};
