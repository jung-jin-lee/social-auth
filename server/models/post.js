const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const PostSchema = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
})

PostSchema.statics.create = function (data) {
  console.log('[create]data:', data)
  const post = new this(data)
  return post.save();
}

PostSchema.statics.findAll = function () {
  return this.find({})
}

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
