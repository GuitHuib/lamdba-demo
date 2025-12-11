import { concatMessage } from "./service.js";

export async function helloWorld(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from aws lambda'
    })
  };
};

export async function welcome(event) {
  const body = JSON.parse(event.body);
  const name = body.name;
  const message = concatMessage(name);
  return {
    statusCode: 200,
    body: JSON.stringify(message)
  };
};