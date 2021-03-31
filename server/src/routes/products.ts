import { Router } from 'express'
import { filter } from 'lodash'
import pick from 'lodash/pick'
import multer from 'multer'
import { Product, validateImg, validateNewProduct } from '../models/Product'

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})

const fileFilter = (req: any, file: any, cb: Function) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
})

export const productsReducer = Router()

productsReducer.get('/', async (req, res) => {
  await Product.find().then((products) => {
    res.status(200).send(products)
  })
})

productsReducer.get('/:category/', async (req, res) => {
  const category = req.params.category
  await Product.find({ category: category })
    .then((products) => {
      if (products.length > 0) {
        res.status(200).send(products)
      } else {
        res.status(404).send(`Brak produktów w kategorii ${category}`)
      }
    })
    .catch((e) => res.status(404).send(e.toString()))
})

productsReducer.post('/', upload.single('img'), (req, res) => {
  const { error, value } = validateNewProduct(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  const newProduct = new Product({
    ...value,
    img: req.file.filename,
  })

  newProduct.save((err) => {
    if (err) {
      res.status(401).send(err)
    } else {
      res.status(201).send(newProduct)
    }
  })
})

productsReducer.put('/:id', upload.single('img'), async (req, res) => {
  const { id } = req.params
  const { error, value } = validateNewProduct(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  await Product.findByIdAndUpdate(id, { ...req.body, img: req.file.filename }, { new: true })
    .then((product) => {
      return res.status(200).send(product)
    })
    .catch((e) => {
      return res.status(404).send(`Product with ${id} not found. Cannot be updated.`)
    })
})

productsReducer.delete('/:id', async (req, res) => {
  const { id } = req.params

  await Product.findByIdAndDelete(id).then((product) => {
    if (product) {
      res.status(200).send(`Deleted product ${product}`)
    } else {
      res.status(404).send(`Product with ${id} not found. Cannot be deleted`)
    }
  })
})
