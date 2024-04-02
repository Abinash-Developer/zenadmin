const Category = require("../model/cateory");
const Tag = require("../model/tag");

const getPosts = (req, res) => {
  res.send("Hello, djksadkjasdkadj!sdsdsdsd");
};
const createCategory = async (req, res) => {
  try {
    const saveCategory = await Category.create({ name: req.body.name });
    return res.status(200).json({
      sucess: true,
      messae: "category created successfully",
      result: saveCategory,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create category" });
  }
};
const fetchAllCategory = async (req, res) => {
  const allcategory = await Category.find({});
  return res.status(200).json({
    sucess: true,
    messae: "category fetched successfully",
    result: allcategory,
  });
};
const fetchCategoryByID = async (req, res) => {
  const [findByID] = await Category.find({ _id: req.params.id });
  return res.status(200).json({
    sucess: true,
    message: "category fetched successfully",
    result: findByID,
  });
};
const updateCategory = async (req, res) => {
  const updateResult = await Category.updateOne(
    { _id: req.body.id },
    { $set: { name: req.body.name } }
  );
  if (updateResult.acknowledged) {
    return res.status(200).json({
      success: true,
      message: "category updated successfully",
    });
  }
};
const deleteCategory = async (req, res) => {
  const deleteRecord = await Category.deleteOne({ _id: req.params.id });
  if (deleteRecord.acknowledged) {
    return res.status(200).json({
      success: true,
      message: "category deleted successfully",
    });
  }
};

const createTag = async (req, res) => {
  try {
    const saveTag = await Tag.create({ name: req.body.name });
    return res.status(200).json({
      sucess: true,
      messae: "tags created successfully",
      result: saveTag,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create category" });
  }
};
const fetchAllTag = async (req, res) => {
  const alltag = await Tag.find({});
  return res.status(200).json({
    sucess: true,
    messae: "tags fetched successfully",
    result: alltag,
  });
};

const fetchTagByID = async (req, res) => {
  const [findByID] = await Tag.find({ _id: req.params.id });
  return res.status(200).json({
    sucess: true,
    message: "Tag fetched successfully",
    result: findByID,
  });
};
const updateTag = async (req, res) => {
  const updateResult = await Tag.updateOne(
    { _id: req.body.id },
    { $set: { name: req.body.name } }
  );
  if (updateResult.acknowledged) {
    return res.status(200).json({
      success: true,
      message: "Tag updated successfully",
    });
  }
};
const deleteTag = async (req, res) => {
  const deleteRecord = await Tag.deleteOne({ _id: req.params.id });
  if (deleteRecord.acknowledged) {
    return res.status(200).json({
      success: true,
      message: "Tag deleted successfully",
    });
  }
};
module.exports = {
  getPosts,
  createCategory,
  createTag,
  fetchAllCategory,
  fetchCategoryByID,
  updateCategory,
  deleteCategory,
  createTag,
  fetchAllTag,
  fetchTagByID,
  updateTag,
  deleteTag
};
