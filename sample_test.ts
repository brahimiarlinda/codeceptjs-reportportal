Feature('sample');

Scenario('test something',  async ({ I }) => {
    await I.sendGetRequest('/');
});
