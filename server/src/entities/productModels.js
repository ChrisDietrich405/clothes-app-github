import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  brand_name;

  @Column("decimal", { precision: 10, scale: 2 })
  price;

//   @Column()
//   description: string;

//   @Column()
//   category: string;

//   @Column({ default: true })
//   inStock: boolean;
}
