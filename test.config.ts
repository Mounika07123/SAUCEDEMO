
type Environment = 'DEV' | 'SIT' | 'QA' | 'UAT';

const environments = {
  DEV: {
    baseURL: 'https://dev.example.com',
  },
  SIT: {
    baseURL: 'https://sit.example.com',
  },
  QA: {
    baseURL: 'https://qa.example.com',
  },
  UAT: {
    baseURL: 'https://uat.example.com',
  },
};

const env = (process.env.TEST_ENV || 'SIT').toUpperCase() as Environment;

if (!Object.hasOwn(environments, env)) {
  throw new Error(`Invalid environment: ${env}`);
}

export const config = {
  environment: env,
  ...environments[env],
};
