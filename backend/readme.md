<h3>Project overview</h3>
<p>The NodeJS based back end application is a used creat a server environment to allow users to interact with LLM prompt templates and get GPT responses for the same. The app uses OpenAI API to interconnect the AI with user prompts.
</p>

<h4>Routes</h4>
<p>Endpoint: '/'('GET')</p>
<p>The endpoint is used to fetch all the available prompt templates</p>

<p>Endpoint: '/prompt/context'('GET')
<p>This used to specifically get the context propmt template.</p>

<p>Endpoint: '/prompt/context'('POST')
<p>The user provides the input variables for the prompt template and a suitable response is being fetched using the OpenAI API for the context prompt.</p>

<p>Endpoint: '/prompt/tone'('GET')
<p>This used to specifically get the tone propmt template.</p>

<p>Endpoint: '/prompt/tone'('POST')
<p>The user provides the input variables for the prompt template and a suitable response is being fetched using the OpenAI API to re write a context in the user's choice of tone.</p>

<p>Endpoint: '/prompt/testing'('GET')
<p>This used to specifically get the testing propmt template.</p>

<p>Endpoint: '/prompt/testing'('POST')
<p>The user provides the input variables for the prompt template and a suitable response is being fetched using the OpenAI API for a peice of code for which the user wants the test casses.</p>

<p>Endpoint: '/prompt/optimization'('GET')
<p>This used to specifically get the optimization propmt template.</p>

<p>Endpoint: '/prompt/optimization'('POST')
<p>The user provides the input variables for the prompt template and a suitable response is being fetched using the OpenAI API for for a peice of code for which the user wants the optimization to be done.</p>

<h4>Node packages used</h4>

<h6>express</h6>
<p>To set up the server in nodejs runtime environment.</p>

<h6>cors</h6>
<p>To allow cross origin access as both frontend and backend are hosted on same local machine. Please whitelist the production backend URL when deploying to production.</p>

<h6>@rpidanny/llm-prompt-templates</h6>
<p>Node package to import the prompt templates.</p>

<h6>langChain</h6>
<p>This is really helpful package when dealing with LLM prompts as it allows to interact with prompts and chain multiple templates.</p>
