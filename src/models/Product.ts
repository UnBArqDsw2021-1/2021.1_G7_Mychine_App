export interface ProductUpdate {
  category?: number;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  lastMaintenance?: Date;
  status?: Status;
}

export interface ProductCreate {
  category: any;
  name: string;
  description: string;
  price: number;
  image: string;
  lastMaintenance?: Date;
  status: Status;
  updatedAt: Date;
}

enum Status {
  Avaliable = 'Avaliable',
  Unavaliable = 'Unavaliable',
  Maintenance = 'Maintenance',
}
