Feature('sample');

Scenario('test something',  async ({ I }) => {
    const res = await I.sendGetRequest('/');
    console.log('res--->', res.data);

});
