Feature('My First Test');

Scenario('test something', ({ I }) => {
    I.sendGetRequest('/');
});