import { Injectable } from '@nestjs/common';
import { Document, FilterQuery, Model } from 'mongoose';

@Injectable()
export abstract class BaseRepository<T extends Document> {
  private readonly modelName: string;

  constructor(private readonly model: Model<T>) {
    // find model name
    for (const modelName of Object.keys(model.collection.conn.models)) {
      if (model.collection.conn.models[modelName] === this.model) {
        this.modelName = modelName;
        break;
      }
    }
  }

  async findOne(
    conditions: Partial<Record<keyof T, unknown>>,
    projection: string | Record<string, unknown> = {},
    options: Record<string, unknown> = {}
  ): Promise<T> {
    return await this.model.findOne(
      conditions as FilterQuery<T>,
      projection,
      options
    );
  }

  async findAll() {
    return await this.model.find();
  }

  async create(entity: T) {
    const newEntity = new this.model(entity);
    return await newEntity.save();
  }
}
