import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { UsersService } from 'src/module/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtType } from 'src/common/interfaces/jwt-type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(params: AuthDto): Promise<JwtType> {
    const user = await this.usersService.findOne(params.email);

    if (user?.password !== params.password) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: await this.jwtService.signAsync({
        id: user.id,
        email: user.email,
      }),
    };
  }
}
