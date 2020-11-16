export class Product {
    constructor(
        public id: string,
        public categoryId: string,
        public name: string,
        public description: string,
        public image: string,
        public price: number,
        public tags: string[]
    ) {}
  }