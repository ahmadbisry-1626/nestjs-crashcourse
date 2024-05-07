import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['pengocok', 'pengasah', 'pengaduk'], {
        message: 'Role must be either pengocok, pengasah, or pengaduk'

    })
    role: 'pengocok' | 'pengasah' | 'pengaduk';
}