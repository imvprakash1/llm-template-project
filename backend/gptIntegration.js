import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

const model = new OpenAI({
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const generateResponse = async (template, userInput) => {
  try {
    const prompt = new PromptTemplate({
      template,
      inputVariables: userInput.inputVariables,
    });
    const formatedPrompt = await prompt.format(userInput);
    const response = await model.predict(formatedPrompt);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default generateResponse;
