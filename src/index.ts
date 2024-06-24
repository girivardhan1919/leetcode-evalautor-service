import bodyParser from 'body-parser';
import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import runPython from './containers/runPythonDocker';
// import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./worker/SampleWorker";

const app: Express = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', apiRouter);
app.listen(serverConfig.PORT, () => {
  console.log(`server started at *:${serverConfig.PORT}`);

  SampleWorker('SampleQueue');

  // sampleQueueProducer('SampleJob', {
  //   name: "sai",
  //   company: "OPEN",
  //   position: "SDE 1",
  //   location: "Bangalore | onsite"
  // }, 1);

  // sampleQueueProducer('SampleJob', {
  //   name: "karthik",
  //   company: "OPEN",
  //   position: "SDE 1",
  //   location: "Bangalore | onsite"
  // }, 2);

  const code = `print('hello')`;
  runPython(code);

});