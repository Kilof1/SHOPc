import { Document } from 'mongoose'

export interface Comment extends Document {
  author: string
  productID: string
  rate: number
  content: string
}
