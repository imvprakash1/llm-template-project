import express from "express";
import generateResponse from "../gptIntegration.js";
import prompts from "../prompts.js";
const router = express.Router();

router.get("/prompt/context", (req, res) => {
  res.send(prompts.context);
});

router.post("/prompt/context", async (req, res) => {
  try {
    // console.log(req.body);
    const userInput = {
      context: req.body.context,
      question: req.body.question,
      tone: req.body.tone,
      inputVariables: req.body.inputVariables,
    };
    const aiResponse = await generateResponse(prompts.context, userInput);
    return res.status(200).send(aiResponse);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
});

router.get("/prompt/tone", (req, res) => {
  res.send(prompts.tone);
});

router.post("/prompt/tone", async (req, res) => {
  try {
    // console.log(req.body);
    const userInput = {
      tone: req.body.tone,
      context: req.body.context,
      inputVariables: req.body.inputVariables,
    };
    const aiResponse = await generateResponse(prompts.tone, userInput);
    return res.status(200).send(aiResponse);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
});

router.get("/prompt/testing", (req, res) => {
  res.send(prompts.testing);
});

router.post("/prompt/testing", async (req, res) => {
  try {
    // console.log(req.body);
    const userInput = {
      language: req.body.language,
      code: req.body.code,
      tone: req.body.tone,
      inputVariables: req.body.inputVariables,
    };
    const aiResponse = await generateResponse(prompts.testing, userInput);
    return res.status(200).send(aiResponse);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
});

router.get("/prompt/optimization", (req, res) => {
  res.send(prompts.optimization);
});

router.post("/prompt/optimization", async (req, res) => {
  try {
    // console.log(req.body);
    const userInput = {
      language: req.body.language,
      code: req.body.code,
      tone: req.body.tone,
      inputVariables: req.body.inputVariables,
    };
    const aiResponse = await generateResponse(prompts.optimization, userInput);
    return res.status(200).send(aiResponse);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
});

export default router;
