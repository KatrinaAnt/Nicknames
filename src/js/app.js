export class Validator {
    validateUsername(name) {
        return /^[^-_\d]([a-z_-][\d]{0,3})*[^-_\d]$/i.test(name);
    }
}