import { CategoryType } from '../types';

class Category implements CategoryType {
	constructor(public id: string, public title: string, public color: string) {}
}

export default Category;
