import { Comment } from '../models/Comment'
import { Product } from '../models/Product'
import { Product as ProductType } from '../types/Product'

export const setRating = async (productID: string) => {
  await Comment.find({ productID: productID })
    .then((comments) => {
      const { length } = comments
      let sum = 0
      comments.forEach((p) => (sum += p.rate))
      let avarage = 0
      if (length > 0) {
        avarage = Math.round(sum / length)
      } else {
        avarage = 0
      }
      return avarage
    })
    .then((avarage) => {
      Product.findByIdAndUpdate(productID, { rating: avarage }).then((product) => product?.save())
    })
}
