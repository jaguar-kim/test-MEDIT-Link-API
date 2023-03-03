//  Call 'Check token' MEDIT API.

import request from "request";

const ACCESS_POINT = "https://stage-openapi-auth.meditlink.com/oauth/check_token";
const ACCESS_TOKEN = "b251004d-df51-4765-841d-4c859b26a60d";

var options = {
  method: "POST",
  url: ACCESS_POINT,
  headers: {
    Authorization:
      "Basic TmplYzJuRXh3RE5SdlhsdFFPZ2dYU1NoTVpKeTBCZ3E6bFZ6ck5RUzhtZW5La3lHcWU4NmU2Y2xmd1l5QmNlMnU=",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  form: {
    token: ACCESS_TOKEN,
  },
};

request(options, (error, response) => {
  if (error) throw new Error(error);

  console.log(response.toJSON());
  console.log(JSON.parse(response.body));
  console.log(`\nThe length of body is ${response.body.length} characters.`);
});
