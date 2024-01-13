export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://www.affirmations.dev/',
      prettyPrintJson: true
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file'
  },
  name: 'codeceptjs-reportportal'
}