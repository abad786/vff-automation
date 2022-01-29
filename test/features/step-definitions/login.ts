import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^User navigates the VFF application$/, async function () {
  await browser.url("https://experience.velocityfrequentflyer.com/");
  await browser.maximizeWindow();
});

When(/^User click on login button$/, async function () {
  console.log("clicking on login button");
  let loginEl = await $("div[role='listbox']>button");
  await loginEl.click();
});

When(
  /User logs in using the (.*) and (.*)/,
  async function (Velocity_number, password) {
    let velocity_number_el = await $("#username");
    await velocity_number_el.setValue(Velocity_number);
    let password_el = await $("#password");
    await password_el.setValue(password);
    let login_button_el = await $("#btnKCLogin");
    await login_button_el.click();
  }
);

Then(/^Login must be successfull$/, async function(){
  await console.log("Login Successfull");
}
);
