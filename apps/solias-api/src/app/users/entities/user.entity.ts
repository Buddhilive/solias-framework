import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'solias_users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
