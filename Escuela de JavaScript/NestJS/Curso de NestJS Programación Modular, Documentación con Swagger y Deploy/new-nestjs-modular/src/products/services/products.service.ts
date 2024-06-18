import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
// import { find } from 'rxjs';

/**
 * Servicio para manejar los productos.
 */
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  /**
   * Obtiene todos los productos.
   * @returns Una lista de todos los productos.
   */
  findAll() {
    return this.productRepo.find();
  }

  /**
   * Obtiene un producto por su ID.
   * @param id - El ID del producto.
   * @returns El producto encontrado.
   * @throws NotFoundException si el producto no existe.
   */
  async findOne(id: number) {
    const product = await this.productRepo.findOne(id);
    if (!product) {
      throw new NotFoundException(`Producto #${id} no encontrado`);
    }
    return product;
  }

  /**
   * Crea un nuevo producto.
   * @param data - Los datos del producto a crear.
   * @returns El producto creado.
   */
  create(data: CreateProductDto) {
    const newProduct = this.productRepo.create(data);
    return this.productRepo.save(newProduct);
  }

  /**
   * Actualiza un producto existente.
   * @param id - El ID del producto a actualizar.
   * @param changes - Los cambios a aplicar al producto.
   * @returns El producto actualizado.
   */
  async update(id: number, changes: UpdateProductDto) {
    const product = await this.productRepo.findOne(id);
    this.productRepo.merge(product, changes);
    return this.productRepo.save(product);
  }

  /**
   * Elimina un producto.
   * @param id - El ID del producto a eliminar.
   * @returns El resultado de la eliminación.
   */
  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
