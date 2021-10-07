export interface ProductUpdate {
  categoryId?: number;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  lastMaintenance?: Date;
  status?: Status;
}

export interface ProductCreate {
  categoryId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  lastMaintenance: Date;
  status: Status;
  updatedAt: Date;
}

enum Status {
  Available = 'Available',
  Unavailable = 'Unavailable',
  Maintenance = 'Maintenance',
}
