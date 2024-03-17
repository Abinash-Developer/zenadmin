const Category = require('../model/cateory');
const getPosts = (req, res) => {
  res.send("Hello, djksadkjasdkadj!sdsdsdsd");
};
const createCategory = async (req, res) => {
    const saveCategory = await Category.create({name: req.body.name})
    return res.status(200).json(saveCategory);
};
module.exports = { getPosts,createCategory };
