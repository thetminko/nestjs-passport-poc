import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { Public } from './auth.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Get('test')
  findAll() {
    return [{ id: 1 }, { id: 2 }];
  }
}
