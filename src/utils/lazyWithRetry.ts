import {lazy} from 'react';

const retry = (fn: any, retriesLeft = 5, interval = 1000): any  => {
    return new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch((error: any) => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        reject(error);
                        return;
                    }
                    retry(fn, retriesLeft - 1, interval).then(resolve,reject);
                }, interval);
            })
    })
}

export const lazyWithRetry = (fn: any) => lazy(() => retry(fn))

export default lazyWithRetry;