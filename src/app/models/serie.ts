export class Serie {
    ids: {
        slug: string
    };
    title: string = '';
    thumb: string = '';
    overview: string = '';
    rating: number = 0;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
