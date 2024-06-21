import { Job, Worker } from 'bullmq';

import redisConnection from '../config/redisConfig';
import SampleJob from '../jobs/SampleJob';

export default function SampleWorker(queueName: string) {
  new Worker(queueName, async (job: Job) => {
    console.log("Sample job worker kicking", job);
    if (job.name === "SampleJob") {

      const sampleJobInterface = new SampleJob(job.data);
      sampleJobInterface.handle(job);
      return true;
    }
  },
    {
      connection: redisConnection
    }
  );
}