<h3>Project overview</h3>
The VueJS based frontend application is the UI that allows users to interact with llm prompt templates to perform various tasks like testing, optimization and toning. Please checkout <a href="https://github.com/imvprakash1/llm-template-project/blob/main/widget-section/public/documentation/UIwalkthroughofthefrontendapp.pdf">Project walk through</a> which shows how the UI and backend are integrated with the functionality.
<p></p>

<h4>Node packages used</h4>

<h6>axios</h6>
<p>To make http requests to the backen APIs</p>

<h6>vue-draggable-next</h6>
<p>Node package used to implement the drag and drop functionality for prompt template selection.</p>

<h3>Road map for the future<h3>
<p>There are various optimization and fix opportunities to provide more exhaustive prompting.</p>
<p>The current drag and drop functionality creates a layout shift when dropping a template from sidebar to the content area which is because while in transition the content area gets 2 elements but the UI template has sapce defined for only 1 element.</p>
<p>Ultimately the drag and drop should be integrated with the specific requirements tab(Testing,Tone,Context and Optimization) where the user will be able to select a specific template from the group.</p>
