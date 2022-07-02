const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "203f1b98512a211a69ec0bf9adcfb8ed-us18",
  server: "us18",
});

const run = async () => {
  const response = await mailchimp.lists.addListMember("9824fe4d65", {
    email_address: "hnncs@gmail.com",
    status: "subscribed"
  })
  console.log(response);
};

run();
