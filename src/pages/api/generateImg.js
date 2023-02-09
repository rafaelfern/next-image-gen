import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  console.log("req_________________________",req)
  
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const desiredImg = req.body.desiredImg || '';

  if (desiredImg.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid description to a desired image",
      }
    });
    return;
  }

  const response = await openai.createImage({
    prompt: desiredImg,
    n: 1,
    size: "512x512"
  })

  res.status(200).json({ result: response.data.data[0].url });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
