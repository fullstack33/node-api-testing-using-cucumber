const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const fetch = require("node-fetch");

// ==== Add User ============
Given("the post api url is {string}", url => {
  this.url = url
});

When("data is", (data)=> {
    this.data = data
})

When("send {string} request to given url and given data", async (method) => {
  await fetch(this.url, {
    method: method,
    body: this.data,
    headers: { "Content-Type": "application/json", Accept: "application/json" }
  })
    .then(res => res.json())
    .then(result => this.data = result)
    .catch(err => console.log("when Error: - ", err));
});

Then("I get user details name {string} and email {string}", (name, email) => {
    assert.equal(JSON.stringify({name, email}), JSON.stringify({name: this.data.name, email: this.data.email}))
});
