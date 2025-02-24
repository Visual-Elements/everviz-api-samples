const fetch = require('node-fetch');
const theme = require('./theme');
const markers = require('./markers');

const apiKey = '',
  TEAM_ID = '',
  createUrl = 'https://api.everviz.com/team/#{TEAM_ID}/chart',
  publishUrl = 'https://api.everviz.com/team/#{TEAM_ID}/chart/#{CHART_ID}/embed';

const body = {
  data: {
    options: {
      version: '0',
      viewState: {
        referenceHeight: 471,
        referenceWidth: 471,
        bearing: 0,
        center: [8.787665300000526, 61.152938600000226],
        pitch: 0,
        zoom: 10.857215436584328
      },
      exporting: {
        sourceWidth: null,
        sourceHeight: null
      },
      markers
    },
    settings: {
      layerOptions: {},
      markerMetadata: {
        BZKNnIOw: {
          markerPresetId: '638075de-c6aa-423c-89aa-736ca0b60311',
          markerPresetName: 'Pin Marker',
          iconPresetId: '638075de-c6aa-413c-89aa-736ca0b60311',
          iconPresetName: 'Red Pin',
          iconSrc:
            '<svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6673 33.5876C5.61414 27.5345 5.61414 17.7204 11.6673 11.6673C17.7204 5.61416 27.5344 5.61416 33.5876 11.6673C39.6407 17.7204 39.6407 27.5345 33.5876 33.5876L22.6274 44.5478L11.6673 33.5876Z" fill="#BC094A" stroke="white"/><circle cx="23" cy="20" r="6" fill="white"/></svg>',
          labelPresetId: '638075de-e6aa-423c-892a-736ca0b60317',
          labelPresetName: 'White'
        }
      },
      viewIsLocked: false,
      aspectRatio: 1,
      dataProvider: [],
      plugins: {
        map: 1,
        cssModules: ['https://app.everviz.com/static/fonts/gordita/style.css']
      },
      template: {
        0: {
          templateTitle: 'Location map',
          templateHeader: 'Location map'
        }
      },
      constructor: ['Map']
    },
    theme,
    template: {}
  },
  referenced: 0,
  name: 'Untitled project'
};

const makeRequest = async (url, options) => {
  return fetch(
    url,
    Object.assign(
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        }
      },
      options
    )
  ).then((res) => res.json());
};

const main = async () => {
  const mapEvervizData = await makeRequest(createUrl.replace('#{TEAM_ID}', TEAM_ID), {
    body: JSON.stringify(body)
  });

  console.log('map everviz data:', mapEvervizData);

  const mapPublishCodes = await makeRequest(
    publishUrl.replace('#{TEAM_ID}', TEAM_ID).replace('#{CHART_ID}', mapEvervizData.chart_id)
  );
  console.log('map publish data:', mapPublishCodes);
};

main();
