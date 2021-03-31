import mongoose from 'mongoose'

export function startupDB(): void {
  const { MONGO_USER } = process.env
  const { MONGO_PASSWORD } = process.env
  const { MONGO_DB } = process.env

  const url = MONGO_USER
    ? `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cc-forum.4k1nv.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
    : 'mongodb://localhost/SHOPc'

  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false })
    .then(() => console.log(`Connected to MongoDB with link ${url}`))
    .catch((e) => console.error(e))
}
