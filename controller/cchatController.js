import asyncHandler from "express-async-handler";
import Content from "../models/cchatModel.js";

/**
 *  @desc get all Chat
 * @route get/Chat
 * @access public
 */

export const getAllChat = asyncHandler(async (req, res) => {
  const Chat = await Content.find();
  if (!Chat.length)
    return res.status(404).json({
      message: "No Chat found",
    });
  res.json(Chat);
});

/**
 *  @desc create a new user
 * @route post/Chat
 * @access public
 */

export const createChat = asyncHandler(async (req, res) => {
  const { content } = req.body;
  console.log(req.body);
  // validate fields
  if (!content)
    return res.status(404).json({
      message: "Fields are required",
    });
  // email check

  // create new user
  const Chat = await Content.create({
    content: content,
  });

  return res.status(200).json({
    message: "User created successfully",
    content: Chat,
  });
});

/**
 *  @desc Delete single user
 * @route Delete/user
 * @access public
 */

export const deleteSingleChat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await Content.findByIdAndDelete(id);
  if (!user) return res.status(404).json({ message: "Chat not found" });
  res.status(200).json({ user: user, message: "Chat deleted" });
});

/**
 *  @desc Edited single user
 * @route patch/user
 * @access public
 */

export const UpdateChat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  if (!content)
    return res.status(404).json({ message: "Fields are required !" });

  const chat = await Content.findById(id);
  if (!chat) return res.status(404).json({ message: "chat not found" });
  chat.content = content;

  const updateChat = await Content.findByIdAndUpdate(id, {
    content,
  });
  if (!updateChat) return res.status(404).json({ message: "Not updated" });
  return res.status(200).json({ message: "Updated the user" });
});
