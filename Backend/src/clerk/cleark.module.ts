import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClerkController } from './controller';

@Module({
  imports: [HttpModule],
  controllers: [ClerkController],
})
export class ClerkModule { }
