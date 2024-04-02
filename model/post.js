const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'Category', 
  },
  tag_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  created_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

const Post = mongoose.model('Post', postSchema); 
module.exports = Post; 
