var CONFIG = {
  "enableUserSettings": false,
  "showUserManual": false,
  "title": {
    "color": "#05668d",
    "text": "郭氏家谱"
  },
  "information": "Information text (you can use HTML)",
  "photoUrl": {
    "prefix": "photos/",
    "suffix": ".png"
  },
  "startView": {
    "photos": true,
    "names": true,
    "columnview": true,
    "staffColumnview": true,
    "showNrDepartments": true,
    "showNrPeople": true
  },
  "enableScreenCapture": true,
  "levelColors": ["#0c058d", "#05668d", "#8d6e05", "#8d2305", "#cfb303"],
  "editCommand": "_edit",
  "dataFields": [{
    "name": "Location",
    "type": "text"
  }],
  "personProperties": [{
    "name": "Phone",
    "type": "text",
    "order": 0
  }, {
    "name": "Email",
    "type": "email",
    "order": 1
  }, {
    "name": "Homepage",
    "type": "url",
    "order": 2
  }, {
    "name": "Country",
    "type": "text",
    "order": 3
  }, {
    "name": "City",
    "type": "text",
    "order": 4
  }, {
    "name": "Street",
    "type": "text",
    "order": 5
  }]
}
