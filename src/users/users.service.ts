import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "Doy@kangen.band",
            "role": "pengocok",
        },
        {
            "id": 2,
            "name": "Bambang Raharja",
            "email": "Pujaanhati@kangen.band",
            "role": "pengasah"
        },
        {
            "id": 3,
            "name": "Doni Kusuma",
            "email": "Doni@kangen.band",
            "role": "pengaduk"
        },
        {
            "id": 4,
            "name": "Burhanudin",
            "email": "Burhan@kangen.band",
            "role": "pengocok"
        },
        {
            "id": 5,
            "name": "Salsa Aulia",
            "email": "Intam@kangen.band",
            "role": "pengasah"
        },
        {
            "id": 6,
            "name": "Bunga Citra Lestari",
            "email": "Bung@kangen.band",
            "role": "pengaduk"
        },
    ]

    findAll(role?: "pengocok" | "pengasah" | "pengaduk") {
        if (role) {
            const rolesArray =  this.users.filter((user) => user.role === role)
            if (rolesArray.length === 0) throw new NotFoundException('User role not found')

            return rolesArray
        }

        return this.users
    }

    findOne(id: number) {
        const user = this.users.find((user) => user.id === id)

        if(!user) throw new NotFoundException('User not found')

        return user
    }

    create(user: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)

        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)

        return newUser
    }

    update(id: number, updatedUser: UpdateUserDto) {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removeUser = this.findOne(id)
        this.users = this.users.filter((user) => user.id !== id)
        return removeUser
    }
}
