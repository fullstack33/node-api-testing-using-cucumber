const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const fetch = require("node-fetch");

// ======= Delete user Given =========
Given('the delete url api is {string}', (url) => {
    this.url = url
})

When("user id is {string}", (id)=> {
    this.id = id
})
When('send the {string} request to given url for given id', async (method) => {
    console.log(`${this.url}${this.id}`)
    await fetch(`${this.url}${this.id}`, {
        method: method,
        headers: { "Content-Type": "application/json", Accept: "application/json" }
    })
    .then(res => res.json())
    .then(result => this.msg = result.message)
})

Then("message is {string}", (msg) => {
    assert.equal(msg, this.msg)
})