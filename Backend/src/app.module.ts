import { Module } from '@nestjs/common';
import { DictionaryWasteModule } from './dictionary-waste/dictionary-waste.module';
import { DetectWasteModule } from './detect-waste/detect-waste.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    DictionaryWasteModule,
    DetectWasteModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // run docker with command : 127.0.1.1
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'LogiRecy',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
