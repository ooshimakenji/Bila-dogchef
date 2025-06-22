const { HfInference } = require('@huggingface/inference');

const SYSTEM_PROMPT = `
 You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

exports.handler = async (event, context) => {
  try {
    const { ingredients } = JSON.parse(event.body || '{}');
    if (!Array.isArray(ingredients)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing ingredients array' }) };
    }

    const hf = new HfInference(process.env.HF_ACCESS_TOKEN);
    const ingredientsString = ingredients.join(', ');
    const response = await hf.chatCompletion({
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
      max_tokens: 1024,
    });

    const recipe = response.choices[0].message.content;
    return {
      statusCode: 200,
      body: JSON.stringify({ recipe }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to generate recipe' }) };
  }
};
