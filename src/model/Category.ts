import { v4 as uuid } from 'uuid';

class Category {
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  id?: string;

  name: string;

  description: string;

  createdAt: Date;
}

export { Category };
