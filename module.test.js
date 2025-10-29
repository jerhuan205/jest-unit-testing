// module.test.js
import mut from './module.js'; // MUT = Module Under Test

// sum()
test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

// div()
test('divides two positive numbers', () => {
    const result = mut.div(10, 2);
    expect(result).toBe(5);
});

test('divides a positive number by a negative number', () => {
    const result = mut.div(10, -2);
    expect(result).toBe(-5);
});

test('divides zero by any number', () => {
    const result = mut.div(0, 5);
    expect(result).toBe(0);
});

test('divides a number by zero (should return Infinity)', () => {
    const result = mut.div(10, 0);
    expect(result).toBe(Infinity);
});

// containsNumbers()
test('returns true when string has digits', () => {
    expect(mut.containsNumbers('abc123')).toBe(true);
});

test('returns false when string has no digits', () => {
    expect(mut.containsNumbers('hello')).toBe(false);
});

test('returns true when string starts with a number', () => {
    expect(mut.containsNumbers('9lives')).toBe(true);
});

test('returns false for an empty string', () => {
    expect(mut.containsNumbers('')).toBe(false);
});

test('returns false when string has spaces only', () => {
    expect(mut.containsNumbers('    ')).toBe(false);
});

test('returns true for string containing zero', () => {
    expect(mut.containsNumbers('version 0.1')).toBe(true);
});