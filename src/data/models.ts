interface cat {
    id: string
    title: string
    color: string
}

export class Category {
    id: string;
    title: string;
    color: string;
    constructor(obj: cat) {
        this.id = obj.id
        this.title = obj.title
        this.color = obj.color
    }
}




