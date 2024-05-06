import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {

    }

    @Get()
    findAll(@Query('role') role?: 'pengocok' | 'pengasah' | 'pengaduk', @Query('name') name?: string) {
        return this.usersService.findAll(role, name)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id)
    }

    @Post()
    create(@Body() user: { name: string, email: string, role: 'pengocok' | 'pengasah' | 'pengaduk' }) {
        return this.usersService.create(user)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: { name: string, email: string, role: 'pengocok' | 'pengasah' | 'pengaduk' }) {
        return this.usersService.update(+id, userUpdate)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id)
    }

}