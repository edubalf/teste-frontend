export class Serie {
    ids: {
        slug: string
    };
    title: string = '';
    thumb: string = 'http://lorempixel.com/200/300/';
    description: string = '';
    image: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}