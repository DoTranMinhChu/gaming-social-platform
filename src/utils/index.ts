import * as FileAPI from 'pages/api/fileAPI';
import * as ImageAPI from 'pages/api/imageAPI';

/**
 * Export result from API
 * @param res
 */
export const exportResults = (res: any) => res.results;

export const convertParams = (params: { [key: string]: any }) => {
    return Object.fromEntries(
        Object.entries(params).map(([key, value]) => [key, JSON.stringify(value)]),
    );
};

/**
 * Convert object to url params
 * @param data
 */
export const objectToParams = (data: { [key: string]: any }) =>
    Object.entries(data)
        .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
        .join('&');

export const PAGINATION = {
    LIMIT: 10,
    PAGE: 1,
};

/**
 * Upload image
 * @param file
 * @param onSuccess
 */
export const uploadFile = async (
    file: any,
    onSuccess = (success = false, linkFile: any = null) => { },
) => {
    try {
        const body = new FormData();
        body.append('file', file);

        const res = await FileAPI.upload(body);

        onSuccess(true, res.object?.url);

        // if () {
        // } else {
        //     return onSuccess(true, res);
        // }
    } catch (error) {
        console.log('object');
        onSuccess(false);
    }
};

export const uploadImage = async (
    image: any,
    onSuccess = (success = false, linkImage: any = null) => { },
) => {
    try {
        const body = new FormData();
        body.append('image', image);

        const res = await ImageAPI.imageUpload(body);

        onSuccess(true, res?.object?.url);
    } catch (error) {
        onSuccess(false);
    }
};

/**
 * Save user info by session storage
 * @input user info
 * @output onSuccess
 * @expect close tab --> remove user info
 */
export const handleSaveSessionStorage = (userData: any) => {
    userData && sessionStorage.setItem('userData', JSON.stringify(userData));
};

export const countTotalComment = (list: any) => {
    let children: any = [];
    const flattenComment = list?.map((item: any) => {
        if (item?.children && item?.children?.length > 0) {
            children = [...children, ...item?.children];
        }
        return item;
    });
    return flattenComment?.concat(children)?.length || 0;
};

export const formatParamsNFT = (params: number) => {
    const test = params > 1000 ? (params / 1000).toLocaleString('es-UK') + 'K' : params;

    return test;
};

export const abbreviateNumber = (value: any) => {
    let newValue: any = value;
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let suffixNum = 0;
    while (newValue >= 1000) {
        newValue /= 1000;
        suffixNum++;
    }

    newValue = newValue?.toString().length > 2 ? newValue?.toPrecision(3) : newValue?.toPrecision();
    newValue += suffixes[suffixNum];
    return newValue;
};

export const trimHTML = (html: string) => {
    return html
        ?.trim()
        ?.replace(/&nbsp;/g, '')
        ?.replace(/<[^\/>][^>]*><\/[^>]+>/g, '');
};
