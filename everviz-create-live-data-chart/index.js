const fetch = require('node-fetch');

var apiKey = '',
  TEAM_ID = '',
  url = "https://api.everviz.com/team/#{TEAM_ID}/chart";

var body = {
  dataId: undefined,
  live: 1,
  name: "Live data API chart",
  referenced: 0,
  "data": {
    "options": {
      "title": {
        "text": "Lorem ipsum dolor sit amet"
      },
      "subtitle": {
        "text": "consectetur adipiscing elit, sed do eiusmod"
      },
      "plotOptions": {
        "series": {
          "states": {
            "select": {
              "color": "#EFFFEF",
              "borderColor": "black",
              "dashStyle": "dot"
            }
          },
          "label": {
            "enabled": false
          }
        }
      },
      "credits": {
        "text": "everviz.com",
        "href": "https://everviz.com"
      },
      "lang": {
        "shortMonths": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "weekdays": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "months": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "numericSymbols": [
          "k",
          "M",
          "G",
          "T",
          "P",
          "E"
        ]
      },
      "series": [{
          "data": [],
          "turboThreshold": 0,
          "type": "line"
        },
        {
          "data": [],
          "turboThreshold": 0,
          "type": "line"
        },
        {
          "data": [],
          "turboThreshold": 0,
          "type": "line"
        }
      ],
      "data": {
        "csvURL": "https://demo-live-data.highcharts.com/vs-load.csv"
      },
      "chart": {
        "type": "line"
      }
    },
    "settings": {
      "dataProvider": {
        "liveData": {
          "csvURL": "https://demo-live-data.highcharts.com/vs-load.csv"
        }
      },
      "plugins": {
        "cssModules": []
      },
      "template": {
        "0": {
          "templateTitle": "Line",
          "templateHeader": "Line"
        }
      },
      "templateDataSettings": {},
      "constructor": [
        "Chart"
      ]
    },
    "theme": {
      "isevervizTheme": true,
      "options": {
        "colors": [
          "#FF495E",
          "#28277E",
          "#6D5BD1",
          "#F9DCE7",
          "#AEC8FA",
          "#DDD8F5"
        ],
        "chart": {
          "style": {
            "fontFamily": "gordita"
          }
        },
        "title": {
          "text": "Lorem ipsum dolor sit amet",
          "align": "left"
        },
        "subtitle": {
          "text": "consectetur adipiscing elit, sed do eiusmod",
          "align": "left"
        },
        "credits": {
          "text": "www.everviz.com",
          "href": "https://www.everviz.com"
        },
        "plotOptions": {
          "series": {
            "borderRadius": 2,
            "pointPadding": 0.01,
            "groupPadding": 0.05,
            "borderWidth": 0,
            "shadow": false,
            "marker": {
              "enabled": false
            },
            "lineWidth": 3
          }
        },
        "legend": {
          "align": "left",
          "verticalAlign": "top",
          "itemMarginBottom": 10,
          "x": 0,
          "symbolRadius": 2
        }
      }
    },
    "template": {
      "chart": {
        "type": "line"
      }
    },
    "customCode": "",
  }
}


fetch(url.replace('#{TEAM_ID}', TEAM_ID), {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey
    },
  })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch((e) => {
    console.log(e);
  });
