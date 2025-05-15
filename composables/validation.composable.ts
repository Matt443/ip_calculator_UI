/**
 *
 * @param emailToValidate - data to be validated
 * @returns {boolean} - true if data passed a test and false if not
 */
export function emailValidation(emailToValidate: string): boolean {
    const emailRegex = new RegExp(
        `^[a-zA-Z0-9.!#$%&'*+=?^_\`{|}~-]+@[a-zA-Z.0-9!#$%&'*+=?^_\`{|}~-]+[.]+[A-Za-z]{2,4}$`,
    );
    return validationWithRegex(emailToValidate, emailRegex);
}

/**
 *
 * @param stringToValidate - data to be validated
 * @returns {boolean} - true if data passed a test and false if not
 */
export function stringValidation(stringToValidate: string): boolean {
    const specialChars = new RegExp("^[a-zA-Z0-9 .,!?()&@#$%^*_-]+$");
    return validationWithRegex(stringToValidate, specialChars);
}

/**
 *
 * @param stringToValidate - data to be validated
 * @param regex - regex pattern to validate a string
 * @returns {boolean} - true if data passed a test and false if not
 */
export function validationWithRegex(
    stringToValidate: string,
    regex: RegExp,
): boolean {
    if (regex.test(stringToValidate) === true) return true;
    return false;
}

/**
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export function isInRange(value: number, min: number, max: number): boolean {
    return value <= max && value >= min;
}
