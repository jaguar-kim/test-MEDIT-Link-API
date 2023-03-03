//  Call 'Password grant' MEDIT API.

import request from "request";

const ACCESS_POINT = "https://stage-openapi-auth.meditlink.com/oauth/token";

const USER_EMAIL = "jaguar102@hotmail.co.kr";
const PW = "1qazXSW@";

var options = {
  method: "POST",
  url: ACCESS_POINT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic TmplYzJuRXh3RE5SdlhsdFFPZ2dYU1NoTVpKeTBCZ3E6bFZ6ck5RUzhtZW5La3lHcWU4NmU2Y2xmd1l5QmNlMnU=",
  },
  form: {
    grant_type: "password",
    username: USER_EMAIL,
    password: PW,
  },
};

request(options, (error, response) => {
  if (error) throw new Error(error);

  console.log(response.toJSON());
  console.log(JSON.parse(response.body));
  console.log(`\nThe length of body is ${response.body.length} characters.`);
});
