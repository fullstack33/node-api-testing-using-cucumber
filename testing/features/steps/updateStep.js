const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const fetch = require("node-fetch");


// ========== update user ===========
Given('the put api url is {string}', url => {
    this.userUpdateUrl = url
});

When('update user id is {string}', id => {
    this.userId = id
})

When('new data is', docString => {
    this.newData = docString
})

When('send {string} request to given url and given data to userId', async (method) => {
    await fetch(`${this.userUpdateUrl}${this.userId}`, {
        method: method,
        body: this.newData,
        headers: { "Content-Type": "application/json", Accept: "application/json" }
    })
    .then(res => res.json())
    .then(result => this.result = result)
    .catch(err => err)
})

Then('I will get update user name {string} and email {string}', (name, email) => {
    assert.equal(email, this.result.email);
    assert.equal(name, this.result.name)
})

