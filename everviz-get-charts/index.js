const fetch = require('node-fetch');

const cmsKey = '',
      TEAM_ID = '',
      pageSize = 15,
      page = 1,
      search = '';

const url = `https://api.everviz.com/team/${TEAM_ID}/projects/search/published?page=${page}&pageSize=${pageSize}&query=${search}`;

fetch(url, {
  method: 'GET',
  headers: { 
    'Content-Type': 'application/json',
    'X-CMS-Key': cmsKey
   },
})
.then(res => res.json())
.then(json => console.log(json))
.catch((e) => {
  console.log(e);
});
