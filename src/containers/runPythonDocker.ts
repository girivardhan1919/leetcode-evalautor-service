// import Docker from 'dockerode';

// import { TestCases } from '../types/testCases';
import { PYTHON_IMAGE } from '../utils/constants';
import createContainer from './containerFactory';
import decodeDockerStream from './dockerHelper';

async function runPython(code: string) {

  const rawLogBuffer: Buffer[] = [];
  console.log("Initializing a new python docker container");
  const pythonDockerContainer = await createContainer(PYTHON_IMAGE, ['python3', '-c', code, 'stty -echo']);

  //starting/booting the corresponding docker container
  await pythonDockerContainer.start();
  console.log('Started Docker contianer');

  const loggerStream = await pythonDockerContainer.logs({
    stdout: true,
    stderr: true,
    timestamps: false,
    follow: true //keep the log stream open and continue to receive new log entries as they are written.
  });

  loggerStream.on('data', (chunk) => {
    rawLogBuffer.push(chunk);
  });

  loggerStream.on('end', () => {
    console.log(rawLogBuffer);
    const completeBuffer = Buffer.concat(rawLogBuffer);
    const decodedStream = decodeDockerStream(completeBuffer);
    console.log(decodedStream);
  });
  return pythonDockerContainer;
}

export default runPython;