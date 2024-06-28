import { Validator } from '../app';

test.each([
    [
        'the correct name', 'Katrina-99_Ant', true
    ],
    [
        'the numbers at the end', 'Katrina_99', false
    ],
    [
        'the numbers at the beginning', '99_Katrina', false
    ],
    [
        'more than three digits', 'Katrina-9999_Ant', false
    ],
    [
        'Cyrillic alphabet', 'Катерина-99_Ант', false
    ],
    [
        'invalid characters', 'Katrina@Ant', false
    ],
])('check %s', (_, name, expected) => {
    const check = new Validator();
    const result = check.validateUsername(name);
    expect(result).toBe(expected);
});