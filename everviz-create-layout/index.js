const fetch = require("node-fetch");

var apiKey = "",
  TEAM_ID = "",
  url = "https://api.everviz.com/team/#{TEAM_ID}/story";

var body = {
  name: "Test layout",
  data: {
    pages: [
      {
        options: {
          title: {
            enabled: true,
          },
          layout: {
            type: "carousel",
            buttonPosition: "leftRight",
            auto: true,
          },
        },
        theme: {
          id: 99999995,
          options: {
            title: {
              enabled: true,
              style: {
                fontSize: "22px",
                fontFamily: "Gordita Bold",
                color: "#172b4c",
              },
              text: "Layout title",
            },
            subtitle: {
              style: {
                fontFamily: "Gordita Regular",
                fontSize: "16px",
                color: "#172b4c",
              },
              enabled: false,
              text: "Layout subtitle",
            },
            caption: {
              style: {
                fontSize: "12px",
                fontStyle: "italic",
                color: "#444444",
              },
              enabled: false,
              text: "Layout caption",
            },
          },
        },
        template: [
          {
            style: {
              width: "100%",
              height: "100%",
            },
          },
        ],
        data: [
          {
            hash: "SGmKjxOob",
            version: 1,
            chart_id: 450016,
            chart_type: 1,
          },
          {
            hash: "u5PrkxPAV",
            version: 2,
            chart_id: 441816,
            chart_type: 3,
          },
        ],
        cssModules: [
          "https://app.everviz.com/fonts/cAMLbHmJ2/font.css",
          "https://app.everviz.com/fonts/HPLuvkaK_/font.css",
        ],
      },
    ],
  },
};

fetch(url.replace("#{TEAM_ID}", TEAM_ID), {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((e) => {
    console.log(e);
  });
