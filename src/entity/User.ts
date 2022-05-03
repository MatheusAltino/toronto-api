import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    constructor(name: string, email: string, age: number){
        this.name = name
        this.email = email
        this.age = age
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    age: number

}
