import moment from 'moment';

export function getDateString(date: Date, offset = '+0900') {
    const today = moment().valueOf();

    const month = moment(Number(today)).diff(moment(Number(date)), 'M');

    if (month) {
        return moment(date, 'x').utcOffset(offset).format('YYYY.MM.DD');
    } else {
        return moment(date, 'x').utcOffset(offset).fromNow();
    }
}

export const TIMEZONE_LIST = [
    {
        label: 'UTC',
        value: '+0000',
    },
    {
        label: 'KST',
        value: '+0900',
    },
    {
        label: 'PST',
        value: '-0800',
    },
    {
        label: 'PDT',
        value: '-0700',
    },
    {
        label: 'CST',
        value: '-0600',
    },
    {
        label: 'CDT',
        value: '-0500',
    },
    {
        label: 'EDT',
        value: '-0400',
    },
    {
        label: 'CET',
        value: '+0100',
    },
    {
        label: 'CEST',
        value: '+0200',
    },
    {
        label: 'EEST',
        value: '+0300',
    },
];

export const convertTimeZone = (timezone: any) => {
    let reusult = TIMEZONE_LIST.filter((item: any) => timezone + '' === item?.value);
    return reusult[0]?.label;
};
