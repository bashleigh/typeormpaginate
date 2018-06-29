import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export default class Test {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test: string;
}