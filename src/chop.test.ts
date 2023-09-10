import { chop } from './chop';

describe('chop', () => {
    const testMsg = 'Should return correct string';

    it(testMsg, () => {
        const template = 'template';
        const data = {
            foo: 'foo',
            bar: 'bar',
        };

        expect(chop(template, data)).toEqual(
            `Hello ${data.foo} ${data.bar} world`,
        );
    });
});
