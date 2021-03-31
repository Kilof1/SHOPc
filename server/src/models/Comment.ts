import Joi from 'joi'
import { model, Schema } from 'mongoose'
import { Comment as CommentType } from '../types/Comments'

const commentSchema: Schema = new Schema(
  {
    author: {
      type: String,
      default: 'test',
    },
    productID: {
      ref: 'Product',
      type: Schema.Types.ObjectId,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
      minLength: 1,
      maxLength: 5,
    },
    content: {
      type: String,
      default: 'Super polecam wszystkim rozważającym zakup',
      maxLength: 1000,
    },
  },
  { timestamps: true },
)

export function validateNewComment(comment: object): Joi.ValidationResult {
  const objectIdPattern = /^[0-9a-fA-F]{24}$/
  const schema = Joi.object({
    productID: Joi.string()
      .regex(objectIdPattern)
      .required(),
    rate: Joi.number()
      .min(0)
      .max(5)
      .required(),
    content: Joi.string().max(1000),
  })

  return schema.validate(comment)
}

export function validateEditedComment(comment: object): Joi.ValidationResult {
  const schema = Joi.object({
    rate: Joi.number()
      .min(1)
      .max(5)
      .required(),
    content: Joi.string().max(1000),
  })

  return schema.validate(comment)
}

export const Comment = model<CommentType>('Comment', commentSchema)
