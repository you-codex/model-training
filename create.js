require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const fs = require("fs");

const fileName = "file-V6Oz8AzlbmoRBlG3hfhDYB4C";


// 01. Prepare List

const prepareData = openai.createFile(
  fs.createReadStream("./data/data1.jsonl"),
  "fine-tune"
);

prepareData
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// 02. Create fine tune
/* const response = openai.createFineTune({
  model: "davinci",
  training_file: fileName,
});

response
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
 */
// 03. listFineTuneEvents
/* 
setInterval(() => {
  const models = openai.listFineTuneEvents(
    "ft-h8mlSO2bndVwfEsTiketIJDK",
    false
  );

  models
    .then((data) => {
      console.log(data.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, 5000); */

// 04. List fine tunes

/* setInterval(() => {
const models = openai.listFineTunes();

models
  .then((data) => {
    console.log(data.data.data);
  })
  .catch((err) => {
    console.log(err);
  });
}, 5000);
 */
// 05. Console the data in the trained data

/* const model = "davinci:ft-personal-2023-03-13-06-30-44";

const response = openai.createCompletion({
  model,
  prompt: "What's your favorite type of dance?",
  temperature: 0.5,
  maxTokens: 1024,
});

response
  .then((data) => {
    console.log(data.data.choices[0].text);
  })
  .catch((err) => {
    console.log(err);
  }); */

// 05. Delete the trained data Model

/* const model = "davinci:ft-personal-2023-03-10-13-33-04";

const response = openai.deleteModel(model);

response
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
 */
