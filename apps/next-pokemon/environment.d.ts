declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOSTNAME: string;
      NODE_ENV: 'development' | 'production';
      PORT: string;
      HOST: `http://${HOSTNAME}:${PORT}`;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
