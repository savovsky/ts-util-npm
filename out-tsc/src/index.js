import { chop } from './chop';
const data = {
    foo: 'baguette',
    bar: 'brie cheese',
};
const template = 'I like to eat {{foo}} and {{bar}}';
chop(template, data);
// >> 'I like to eat baguette and brie cheese'
console.log(chop(template, data));
