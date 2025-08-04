import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'varchar', nullable: true })
  fullName: string | null;

  @Column({ type: 'bigint', unsigned: true })
  phone: number;

  @BeforeInsert()
  generateId() {
    console.log('Before inserting Employee...');
  }
}













/*import { Entity,PrimaryGeneratedColumn,Column,BeforeInsert, PrimaryColumn,} from 'typeorm';
@Entity('employee')
export class EmployeeEntity {
  @PrimaryColumn()
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = 'EMP' + Date.now();
  }

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'varchar', nullable: true })
  fullName: string;

  @Column({ type: 'bigint', unsigned: true })
  phone: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  Password: string;

  @Column()
  Gender: string;
}*/


/*
@Entity('employee')
export class EmployeeEntity {
  @PrimaryColumn()
  id: string;

  @BeforeInsert()
  generateId() {

    this.id = 'EMP' + Date.now();
  }

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'varchar', nullable: true })
  fullName: string;

  @Column({ type: 'bigint', unsigned: true })
  phone: number;
}*/
