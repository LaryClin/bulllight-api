import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { CategoryModule } from './category/category.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [UserModule, RoleModule, CategoryModule, VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
