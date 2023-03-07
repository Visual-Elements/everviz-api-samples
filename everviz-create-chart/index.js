const fetch = require('node-fetch');

var apiKey = '',
	TEAM_ID = '',
	url = "https://api.everviz.com/team/#{TEAM_ID}/chart";

var body = {
	dataId: undefined,
	live: 1,
	name: "Test Untitled Chart",
	referenced: 0,
  "data": {
    "template": [{
      "chart": {
        "type": "column",
        "polar": false,
        "inverted": false
      }
    }],
    "options": {
      "title": {
        "text": "Test chart",
      },
      "subtitle": {
        "text": "Test subtitle",
      },
      "credits": {
        "text": "Created using everviz",
        "href": "https://everviz.com"
      },
      "chart": {
        "type": "column",
        "polar": false,
        "inverted": false
      },
      "series": [{
        "turboThreshold": 0,
        "_colorIndex": 0,
        "_symbolIndex": 0,
        "type": "column",
        "colorByPoint": true,
        "borderWidth": 1
      }],
      "plotOptions": {
        "series": {
          "label": {
            "enabled": false
          },
          "groupPadding": 0
        }
      },
      "colors": [
        "#47475c", 
        "#4e8c61", 
        "#9EB3DC", 
        "#ffb36a", 
        "#b3621c", 
        "#5c1800"
      ]
    },
    "customCode": "",
    "theme": {},
    "settings": {
      "constructor": [
        "Chart"
      ],
      "template": {},
      "plugins": {
        "annotations": 1
      },
      "dataProvider": {
        "csv": "Label,Value\nPorsgrunn/Skien,28454\nInnlandet,28816\nAgder og Rogaland,32380\nÅlesund m/omegn,33704\nVestfold og Telemark,33752\nKristiansand,34378\nFredrikstad/Sarpsborg,36587\nNord-Norge,37185\nHamar m/Stange,37637\nMidt-Norge,38484\nStavanger m/omegn,39263\nTønsberg m/Færder,42733\nVestlandet,43449\nDrammen m/omegn,44285\nBodø m/Fauske,47195\nRomerike,48120\nNorge,48785\nBergen,50506\nFollo,52304\nTrondheim,52569\nTromsø,53632\nBoligen ligger her: Asker/Bærum,64512\nBoligen ligger her: Viken m/Oslo,65687\nOslo,86024\nDenne boligen,172500",
        "googleSpreadsheet": false,
        "liveData": false,
        "assignDataFields": [{
          "labels": "A",
          "values": "B"
        }],
        "seriesMapping": [{
          "x": 0,
          "y": 1
        }]
      }
    }
  }
}


fetch(url.replace('#{TEAM_ID}', TEAM_ID), {
        method: 'POST',
        body:    JSON.stringify(body),
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


