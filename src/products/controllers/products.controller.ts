import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsService } from '../services/products.service';
import { Product } from '../schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<Array<Product>> {
    return this.productsService.getAll();
  }

  @Get(':id')
  getByID(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id);
  }

  @Post()
  create(@Body() product: CreateProductDto): Promise<Product> {
    return this.productsService.create(product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() product: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, product);
  }
}
