const postModel = require("../models/postModel");
const {setValue, getValue, deleteValue} = require("../config/redisConfig");

let createPost = async (req, res) => {
  try {
    const { content, title } = req.body;
    if (!content || !title) {
      return res.status(400).json({ message: `Invalid content and title` });
    }
    const updatePost = await postModel.create({
      title: title,
      content: content,
    });

    if (!updatePost) {
      return res.status(401).json({ message: `not update successful` });
    }
    return res.status(200).json({
      message: `Post created successful`,
      title: title,
      content: content,
    });
  } catch (error) {
    return res.status(500).json({ message: ` Error while updating post` });
  }
};

let postList = async (req, res) => {
  try {
    console.log('checking post list');
    // const redisKey = 'redisPostList'; // Redis key for storing the value

    // const getRedisValue = await getValue(redisKey);
    // console.log('checking getRedisValue',getRedisValue);

    // if(getRedisValue) {
    //   console.log(`getting value from redis`);
    // return res.status(200).json({ data: result });

    // }
    const result = await postModel.find();
    // let check = await setValue('redisPostList', JSON.stringify(result));
    // console.log('checking',check);
    
    console.log(`getting value from db`);

    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ message: `internal error${error}}` });
  }
};

let getPostById = async (req, res) => {
  try {
    let { postId } = req.params;
    console.log(`checking params`, postId);
    if (!postId) {
      return res.status(404).json({ message: `need postID` });
    }
    let result = await postModel.findOne({ _id: postId });
    if (!result) {
      return res.status(404).json({ message: `invalid post id ` });
    }
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(500).json({ data: `Error while getting Post` });
  }
};

module.exports = { createPost, postList, getPostById };
