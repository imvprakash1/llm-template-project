import express from "express";
import cors from "cors";
import "dotenv/config";
import llmPromptTemplates from "@rpidanny/llm-prompt-templates";
const port = process.env.PORT || 5000;
import promptRouter from "./routes/prompt.js";

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

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
