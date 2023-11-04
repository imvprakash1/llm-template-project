const prompts = {
  context:
    'Answer the question based on the context below. Keep the answer short. Respond "Unsure about answer" if not sure about the answer.\n\nContext: {context}\n\nQuestion: {question}\n\nAnswer:',
  testing: "Write tests for the following {language} code:\n{code}",
  tone: "Consider yourself as a professional with 20+ years of experirence. Using your skills please re-write the following context in {tone}.\nContext: {context} ",
  optimization:
    "Optimize the {language} code below to make it more clean and efficient.\n{code}\n Only return the rewritten code and nothing else.\n",
};

export default prompts;
