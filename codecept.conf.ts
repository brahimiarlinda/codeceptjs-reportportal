require('dotenv').config()

import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://www.affirmations.dev'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file'
  },
  name: 'codeceptjs-reportportal',
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
}