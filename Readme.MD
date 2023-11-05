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

<h3>Challenges and issues</h3>
<p style={color:black}>One of the biggest challenge I faced was optimizing the layout shift which was happening due to drag and drop feature</p>
<p>The VueJs directives like virable binding and v-model helped to reduce the layout shift but it can still be optimized through javascript events</p>

<p style={color:black}>Formating the prompt template using the user input</p>
<p>This was easily tackled by the lanChain library which allowed me to format and interact with OpenAI APIs to receive responses.</p>

<p style={color:black}>Working with VueJS was challenging.</p>
<p>VueJS is a very interactive and easy to use framework which provides hands on solution through its huge community and documentation.</p>

<p style={color:black}>Integrating the new widget component with existing app</p>
<p>This is still one of the pending tasks where the new UI shoul integrate with the existing app. Once the features are developed we can re-design the look and feel of the UI to match with existing app and post deploymrnt it should work well.</p>

<h3>Follow ups</h3>
<p>Describe your approach and technologies used.</p>
<p>The basic setup of a nodejs server serving as the backend app to receive and transform the prompt template with user input and then interacting with OpenAI to receive responses for the same.<ul>Technologies used:<li>Nodejs with express</li><li>langChain node package</li><li>VueJS to develop the UI</li>

<p>Explain the drag-and-drop implementation and any libraries/methods used.</p>
<p>The drag and drop feature is implemented using the vue-draggable-next library, this allows us to drag, shuffle or sort elements in a list or within lists which belong to same group.</p>

<p>How did you enable tone selection and what technologies/methods did you use?</p>
<p>As of now the app takes tone as a free form text field and ask sthe GPT to consider the tone while generating response. As a improvement we can define an enum where the user can only select a certain values to increease the efficiency and accuracy.</p>

<p>Explain 'tags' incorporation and how it interacts with the backend.</p>
<p>Tage are imporatant input which can help us to determin the relation between a prompt template and the user requirements. We can use this to draw useful insigths such as on what are the most common set of tone-tags so that prompts can be filtered and optimized based on priority</p>

<h3>Road map for the future<h3>
<p>There are various optimization and fix opportunities to provide more exhaustive prompting.</p>
<p>The current drag and drop functionality creates a layout shift when dropping a template from sidebar to the content area which is because while in transition the content area gets 2 elements but the UI template has sapce defined for only 1 element.</p>
<p>Ultimately the drag and drop should be integrated with the specific requirements tab(Testing,Tone,Context and Optimization) where the user will be able to select a specific template from the group.</p>
