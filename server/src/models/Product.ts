import Joi from 'joi'
import { model, Schema } from 'mongoose'
import { Product as ProductType } from '../types/Product'

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      maxLength: 20,
      required: true,
    },
    price: {
      type: Number,
      maxLength: 100000,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      maxLength: 10000
    },
    rating: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export function validateNewProduct(product: object): Joi.ValidationResult {
  const schema = Joi.object({
    name: Joi.string()
      .max(20)
      .required(),
    price: Joi.number()
      .max(100000)
      .required(),
    category: Joi.string().required(),
  })
  
  return schema.validate(product)
}

export function validateImg(img: string): Joi.ValidationResult {
  const schema = Joi.object({
    img: Joi.string().required()
  })

  return schema.validate(img);
}


export const Product = model<ProductType>('Product', productSchema)
