import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://products:products@localhost:27017/products?retryWrites=true',
    ),
    ProductsModule,
  ],
})
export class AppModule {}
