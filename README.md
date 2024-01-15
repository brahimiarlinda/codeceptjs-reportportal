# codeceptjs-reportportal

This project integrates CodeceptJS with ReportPortal for enhanced test reporting.

## Version

1.0.0

## Description

Codeceptjs with [reportportal](https://github.com/reportportal/agent-js-codecept/) as a plugin (check codeceptj.conf.yml file for more);

## Installation

### Dependencies

```bash
npm install
```

### Report Portal installation

As described in the Report Portal documentation [here](https://reportportal.io/docs/installation-steps/DeployWithDockerOnLinuxMac/), run:

```bash
docker-compose -p reportportal up -d --force-recreate
```

Report Portal will start running in the port http://localhost:8080

To login to to Report Portal you can get the default username and password from the documentation, which are
Default User: 
    username: default
    password: 1q2w3e

### Report Portal configuration

In the configuration below, the only value you need to adjust for the default-local configuration, is the token that you can be generated via the Report Portal > User Profile > API Keys [here](http://localhost:8080/ui/#userProfile/apiKeys).
Add the token/api key in the .env file.

  plugins: {
    reportportal: {
      enabled: true,
      require: '@reportportal/agent-js-codecept',
      token: process.env.TOKEN,
      endpoint: 'http://localhost:8080/api/v1',
      launchName: 'local launch',
      projectName: 'default_personal'
    }
  }

## Usage
To run your tests with CodeceptJS and send reports to Report Portal, use the following command:

```bash
npm test
```


