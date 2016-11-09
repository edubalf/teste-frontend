export class Serie {
    ids: {
        slug: string
    };
    title: string = '';
    thumb: string = 'http://lorempixel.com/200/300/';
    overview: string = '';
    image: string = '';
    rating: number;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}