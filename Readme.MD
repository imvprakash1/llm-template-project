<h2>Node-Vue Project for Prompt template</h2>

<h3>Steps to setup the project</h3>

<ul>
<li>Take the codebase to setup in a local directory. Please note that the backen application and the frontend application are present in the same repository.</li>
<li>Please remeber to replace the OpenAI API key the .env file in the backend folder</li>
<li>Open the terminal in the root and run the command <code>cd backend</code> This will change the directory to the backend folder.</li>
<li>Now we need to install the node modules for the backend application. Run the command <code>npm install</code></li>
<li>To run the nodejs backend application run <code>npm run dev</code>.</li>
<li>Now we need to install the node modules for the Vuejs frontend application. Run the the command <code>cd ../widget-section</code></li>
<li>Now to install the node modules run <code>npm install</code></li>
<li>Once the installation is completed, run <code>npm run serve</code> to run the project and you are all set!</li>
</ul>

<h3>Project overview</h3>

<p>The backend of the application is designed in such a way to expose the prompt templates for the users for or context, testing, optimization and tone. Please find more details regarding the backend application <a href="https://github.com/imvprakash1/llm-template-project/blob/main/backend/readme.md">here</a></p>
<p>The Vuejs frontend application allows the user to drag and drop a prompt template from a list of templates according to their need. These templates helps the user to design a more efficient and accurate prompt for their requirements. Please find more details regarding the frontend application <a href="https://github.com/imvprakash1/llm-template-project/blob/main/widget-section/README.md">here</a></p>

<h3>Road map for the future<h3>
<p>There are various optimization and fix opportunities to provide more exhaustive prompting.</p>
<p>The current drag and drop functionality creates a layout shift when dropping a template from sidebar to the content area which is because while in transition the content area gets 2 elements but the UI template has sapce defined for only 1 element.</p>
<p>Ultimately the drag and drop should be integrated with the specific requirements tab(Testing,Tone,Context and Optimization) where the user will be able to select a specific template from the group.</p>
