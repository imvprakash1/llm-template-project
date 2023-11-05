import express from "express";
import cors from "cors";
import "dotenv/config";
import llmPromptTemplates from "@rpidanny/llm-prompt-templates";
const port = process.env.PORT || 5000;
import promptRouter from "./routes/prompt.js";
import generateResponse from "./gptIntegration.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(promptRouter);

app.get("/", (req, res) => {
  const prompts = [];
  for (let prompt in llmPromptTemplates) {
    if (llmPromptTemplates[prompt].hasOwnProperty("content")) {
      prompts.push(llmPromptTemplates[prompt]);
    }
  }
  res.send(prompts);
});

app.post("/", async (req, res) => {
  try {
    const template = req.body.template;
    const userInput = {
      tone: req.body.tone,
      inputVariables: req.body.inputVariables,
    };
    console.log(userInput);
    const data = await generateResponse(template, userInput);
    return res.send(data);
  } catch (error) {
    return res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
