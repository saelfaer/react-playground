function factorial (n) {
    'use strict';

    if (typeof n !== 'number' || n % 1 !== 0 || n < 0) {
        return {
            errorcode: 1,
            error: 'n should be a positive integer'
        };
    }
    else if (n === 0) {
        return function () {
            return 1;
        }();
    }
    else {
        return n * factorial(n - 1);
    }
}

factorial(1);
