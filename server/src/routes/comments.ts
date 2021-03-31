import { Router } from 'express'
import { pick, update } from 'lodash'
import { setRating } from '../helpers/setRating'
import { Comment, validateEditedComment, validateNewComment } from '../models/Comment'
import { Product } from '../models/Product'

export const commentReducer = Router()

commentReducer.get('/', async (req, res) => {
  Comment.find().then((comments) => {
    res.status(200).send(comments)
  })
})



commentReducer.post('/', async (req, res) => {
  const { error, value } = validateNewComment(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }
  const { productID } = req.body

  const product = await Product.findById(productID)
  if (!product) {
    return res.status(400).send('Invalid product ID.')
  }

  const newComment = new Comment({
    ...value,
  })

  await newComment.save()

  await setRating(productID)

  res.status(200).send(newComment)
})



commentReducer.put('/:id', async (req, res) => {
  console.log(req.body)
  const { error } = validateEditedComment(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  const { id } = req.params

  await Comment.findByIdAndUpdate(
    id,
    { rate: req.body.rate, content: req.body.content },
    { new: true },
  )
    .then(async (updatedComment) => {
      if (updatedComment) {
        await res.status(200).send(updatedComment)
        setRating(updatedComment.productID)
      }
    })
    .catch(() => {
      return res.status(404).send(`Comment with ${id} not found. Cannot be updated.`)
    })
})



commentReducer.delete('/:id', async (req, res) => {
  const { id } = req.params
  await Comment.findByIdAndDelete(id)
    .then(async (comment) => {
      await res.status(200).send(comment)
      setRating(comment!.productID)
    })
    .catch(() => res.status(404).send(`Comment with ${id} not found. Cannot be updated.`))
})
