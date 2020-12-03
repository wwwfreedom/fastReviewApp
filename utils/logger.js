import pino from "pino";
import { logflarePinoVercel } from "pino-logflare";

let logStream;
let logSend;

if (process.env.NODE_ENV !== "development") {
  const { stream, send } = logflarePinoVercel({
    apiKey: process.env.NEXT_PUBLIC_LOGFLARE_KEY,
    sourceToken: process.env.NEXT_PUBLIC_LOGFLARE_STREAM
  });
  logStream = stream;
  logSend = send;
}

const logger = pino(
  {
    browser: {
      transmit: {
        send: logSend
      }
    },
    level: "debug",
    base: {
      env: process.env.NODE_ENV || "ENV not set",
      revision: process.env.VERCEL_GITHUB_COMMIT_SHA
    }
  },
  logStream
);

// required formatting to play nice with big query used by logflare
const formatObjectKeys = (headers) => {
  const keyValues = {};

  Object.keys(headers).map((key) => {
    const newKey = key.replace(/-/g, "_");
    keyValues[newKey] = headers[key];
  });

  return keyValues;
};

export { logger, formatObjectKeys };
