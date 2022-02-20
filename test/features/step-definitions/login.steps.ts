import { Given, When, Then } from "@wdio/cucumber-framework";
import reporter from "../../helper/reporter";
import sauseHomePage from "../../page-objects/home.page";
import constants from "../../../data/data_provider.json";
import data from "../../helper/json.helper";
import homePage from "../../page-objects/home.page";
import loginPage from "../../page-objects/login.page";

Given(/^User navigates the VFF application$/, async function () {
  //@ts-ignore
  await homePage.navigateTo(browser.config.url);
  reporter.addStep(this.testid, "info", "VFF application is open");
});

When(/^User click on login button$/, async function () {
  console.log("clicking on login button");
  await homePage.clickLoginLink(this.testid);
});

When(
  /User logs in using the credential from the data_provider (.*)/,
  async function (credential) {
    await loginPage.enterUsername(
      this.testid,
      data.getCredential(credential)["username"]
    );
    await loginPage.enterPassword(
      this.testid,
      data.getCredential(credential)["password"]
    );
    await loginPage.clickLoginBtn(this.testid);
  }
);

Then(/^User must be looged In the appliction successfull$/, async function () {
  homePage.verifyHomePageTitle(this.testid, data.getData("title"));
});
