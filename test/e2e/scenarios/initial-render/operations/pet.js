
describe("render pet api container", function () {
    let mainPage
    let apiWrapper
    beforeEach(function (client, done) {
        mainPage = client
            .url("localhost:3200")
            .page.main()

        client.waitForElementVisible(".download-url-input", 5000)
            .pause(2000)
            .clearValue(".download-url-input")
            .setValue(".download-url-input", "http://localhost:3200/test-specs/1.json")
            .click("button.download-url-button")
            .pause(1000)

        apiWrapper = mainPage.section.apiWrapper

        done()
    })
    afterEach(function (client, done) {
        done()
    })
    it("render section", function (client) {
        mainPage.expect.section("@apiWrapper").to.be.visible.before(5000)
        client.end()
    })
    it("test rendered pet container", function (client) {
        apiWrapper.waitForElementVisible("@petAPIWrapper", 5000)
            .expect.element("@petAPIWrapper").to.be.visible

        client.end()
    })
    it("collapse pet wrapper", function (client) {
        apiWrapper.waitForElementVisible("@petAPIWrapper", 5000)
            .click("@petAPIWrapperBar")
            .assert.cssClassNotPresent("@petAPIWrapper", "is-open")

        client.end()
    })
    it("render post /pet api container", function (client) {
        apiWrapper.waitForElementVisible("@petOperationPostContainer", 5000)
            .assert.containsText("@petOperationPostTitle", "/pet")
            .click("@petOperationPostCollpase")
            .waitForElementVisible("@petOperationPostCollapseContainer", 3000)
            .click("@petOperationPostTryBtn")
            .waitForElementVisible("@petOperationPostTryText", 1000)
            .waitForElementVisible("@petOperationPostExecuteBtn", 1000)
            .click("@petOperationPostTryBtn")
            .assert.cssClassNotPresent("@petOperationPostTryBtn", "cancel")

        client.end()
    })

    it("Testing post /pet api Mock data", function (client) {
        apiWrapper.waitForElementVisible("@petOperationPostContainer", 5000)
            .click("@petOperationPostCollpase")
            .waitForElementVisible("@petOperationPostCollapseContainer", 3000)
            .click("@petOperationPostTryBtn")
            .waitForElementVisible("@petOperationPostExecuteBtn", 1000)
            .click("@petOperationPostExecuteBtn")
            .waitForElementVisible("@petOperationPostMockCategoryID", 2000)
            .assert.containsText("@petOperationPostMockCategoryID", "0")
            .assert.containsText("@petOperationPostMockCategoryName", "\"string\"")
            .assert.containsText("@petOperationPostMockName", "\"doggie\"")
            .assert.containsText("@petOperationPostTagID", "0")
            .assert.containsText("@petOperationPostTagName", "\"string\"")
            .assert.containsText("@petOperationPostStatus", "\"available\"")
            .click("@petOperationPostTryBtn")
            .assert.cssClassNotPresent("@petOperationPostTryBtn", "cancel")

        client.end()
    })

    it("render put /pet api container", function (client) {
        apiWrapper.waitForElementVisible("@petOperationPutContainer", 5000)
            .assert.containsText("@petOperationPutTitle", "/pet")
            .click("@petOperationPutCollpase")
            .waitForElementVisible("@petOperationPutCollapseContainer", 3000)
            .click("@petOperationPutTryBtn")
            .waitForElementVisible("@petOperationPutTryText", 1000)
            .waitForElementVisible("@petOperationPutExecuteBtn", 1000)
            .click("@petOperationPutTryBtn")
            .assert.cssClassNotPresent("@petOperationPutTryBtn", "cancel")
            
        client.end()
    })
    it("Testing put /pet api Mock data", function (client) {
        apiWrapper.waitForElementVisible("@petOperationPutContainer", 5000)
            .click("@petOperationPutCollpase")
            .waitForElementVisible("@petOperationPutCollapseContainer", 3000)
            .click("@petOperationPutTryBtn")
            .waitForElementVisible("@petOperationPutExecuteBtn", 1000)
            .click("@petOperationPutExecuteBtn")
            .waitForElementVisible("@petOperationPutMockCategoryID")
            .assert.containsText("@petOperationPutMockCategoryID", "0")
            .assert.containsText("@petOperationPutMockCategoryName", "\"string\"")
            .assert.containsText("@petOperationPutMockName", "\"doggie\"")
            .assert.containsText("@petOperationPutTagID", "0")
            .assert.containsText("@petOperationPutTagName", "\"string\"")
            .assert.containsText("@petOperationPutStatus", "\"available\"")
            .click("@petOperationPutTryBtn")
            .assert.cssClassNotPresent("@petOperationPutTryBtn", "Cancel")

        client.end()
    })

    it("render get by tag /pet api container", function (client) {
        apiWrapper.waitForElementVisible("@petOperationGetByTagContainer", 5000)
            .assert.containsText("@petOperationGetByTagTitle", "/pet/findByTags")
            .click("@petOperationGetByTagCollpase")
            .waitForElementVisible("@petOperationGetByTagCollapseContainer", 3000)
            .click("@petOperationGetByTagTryBtn")
            .waitForElementVisible("@petOperationGetByTagTryAdded", 1000)
            .waitForElementVisible("@petOperationGetByTagExecuteBtn", 1000)
            .click("@petOperationGetByTagTryBtn")
            .assert.cssClassNotPresent("@petOperationGetByTagTryBtn", "cancel")
            
        client.end()
    })

    it("Testing get by tag /pet api Mock data", function (client) {
        apiWrapper.waitForElementVisible("@petOperationGetByTagContainer", 5000)
            .click("@petOperationGetByTagCollpase")
            .waitForElementVisible("@petOperationGetByTagCollapseContainer", 3000)
            .click("@petOperationGetByTagTryBtn")
            .waitForElementVisible("@petOperationGetByTagExecuteBtn", 1000)
            .click("@petOperationGetByTagExecuteBtn")
            .waitForElementVisible("@petOperationGetByTagMockCategoryID")
            .assert.containsText("@petOperationGetByTagMockCategoryID", "0")
            .assert.containsText("@petOperationGetByTagMockCategoryName", "\"string\"")
            .assert.containsText("@petOperationGetByTagMockName", "\"doggie\"")
            .assert.containsText("@petOperationGetByTagTagID", "0")
            .assert.containsText("@petOperationGetByTagTagName", "\"string\"")
            .assert.containsText("@petOperationGetByTagStatus", "\"available\"")
            .click("@petOperationGetByTagTryBtn")
            .assert.cssClassNotPresent("@petOperationGetByTagTryBtn", "cancel")

        client.end()
    })

    it("render delete /pet api container", function (client) {
        apiWrapper.waitForElementVisible("@petOperationDeleteContainer")
            .assert.containsText("@petOperationDeleteTitle", "/pet/{petId}")
            .click("@petOperationDeleteCollpase")
            .waitForElementVisible("@petOperationDeleteCollapseContainer", 3000)
            .click("@petOperationDeleteTryBtn")
            .waitForElementVisible("@petOperationDeleteExecuteBtn", 1000)
            .click("@petOperationDeleteTryBtn")
            .assert.cssClassNotPresent("@petOperationDeleteTryBtn", "cancel")
            
        client.end()
    })
    it("Testing delete /pet api Mock data", function (client) {
        apiWrapper.waitForElementVisible("@petOperationDeleteContainer", 3000)
            .click("@petOperationDeleteCollpase")
            .waitForElementVisible("@petOperationDeleteCollapseContainer", 3000)
            .click("@petOperationDeleteTryBtn")
            .waitForElementVisible("@petOperationDeleteExecuteBtn", 1000)
            .click("@petOperationDeleteExecuteBtn")
            .waitForElementVisible("@petOperationDeleteMockCategoryID")
            .assert.containsText("@petOperationDeleteMockCategoryID", "0")
            .assert.containsText("@petOperationDeleteMockCategoryName", "\"string\"")
            .assert.containsText("@petOperationDeleteMockName", "\"doggie\"")
            .assert.containsText("@petOperationDeleteTagID", "0")
            .assert.containsText("@petOperationDeleteTagName", "\"string\"")
            .assert.containsText("@petOperationDeleteStatus", "\"available\"")
            .click("@petOperationDeleteTryBtn")
            .assert.cssClassNotPresent("@petOperationDeleteTryBtn", "cancel")

        client.end()
    })
    
})