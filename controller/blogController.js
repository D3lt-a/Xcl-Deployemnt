const Blogs = require('../models/blogs')

const getAllBlogs = async (req, res) => {
    const blogs = await Blogs.find()
    res.status(200).json({ blogs }) // This Status code is for successful response
}
const getBlog = async (req, res) => {
    const { id } = req.params
    const blog = await Blogs.findById(id)
    if (!blog) {
        return res.status(404).json({ msg: `No Blog was Found` }) // This Status code is for Not Found response
    }
    res.status(200).json({ blog })
}

const createBlog = async (req, res) => {
    const blog = await Blogs.create(req.body)
    await blog.save()
    res.status(201).json({ blog }) // This Status code is for Created response
}

const deleteBlog = async (req, res) => {
    await Blogs.findByIdAndDelete(req.params.id)
    res.status(200).json({ msg: 'Blog deleted successfully' }) // This Status code is for successful response
}

module.exports = { getAllBlogs, getBlog, createBlog, deleteBlog }