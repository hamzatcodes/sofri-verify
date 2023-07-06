import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 10,
    })
    accountNumber: string;

    @Column({
        length: 11,
    })
    bvn: string;

    @Column()
    status: string;

    @Column()
    created: Date;
}
