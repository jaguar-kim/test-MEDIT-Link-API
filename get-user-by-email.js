//  Call 'Get user by email' MEDIT API.

import request from "request";

const ACCESS_POINT = "https://stage-openapi-resources.meditlink.com/v1/users";
const CLIENT_ID = "Njec2nExwDNRvXltQOggXSShMZJy0Bgq";
const ACCESS_TOKEN = "b251004d-df51-4765-841d-4c859b26a60d";
const USER_EMAIL = "jaguar102@hotmail.co.kr";

var options = {
  method: "GET",
  url: `${ACCESS_POINT}/${USER_EMAIL}`,
  headers: {
    Authorization: `bearer ${ACCESS_TOKEN}`,
    "x-meditlink-client-id": CLIENT_ID,
    "Content-Type": "application/json",
  },
};

request(options, function (error, response) {
  if (error) throw new Error(error);

  console.log(response.toJSON());
  console.log(JSON.parse(response.body));
  console.log(`\nThe length of body is ${response.body.length} characters.`);
});
