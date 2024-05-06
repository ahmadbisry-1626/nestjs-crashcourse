import { Injectable } from '@nestjs/common';

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

    findAll(role?: "pengocok" | "pengasah" | "pengaduk", name?: string) {
        if (role) {
            return this.users.filter((user) => user.role === role)
        }

        if (name) {
            return this.users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()) )
        }

        return this.users
    }

    findOne(id: number) {
        const user = this.users.find((user) => user.id === id)

        return user
    }

    create(user: { name: string, email: string, role: 'pengocok' | 'pengasah' | 'pengaduk' }) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)

        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)

        return newUser
    }

    update(id: number, updatedUser: { name?: string, email?: string, role?: 'pengocok' | 'pengasah' | 'pengaduk' }) {
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
