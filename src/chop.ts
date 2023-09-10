type SupportedData = {
    foo: string;
    bar: string;
};

export const chop = (template: string, data: SupportedData) => {
    return `Hello ${data.foo} ${data.bar} world`;
};
