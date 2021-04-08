var CONFIG = {
  "enableUserSettings": false,
  "showUserManual": false,
  "title": {
    "color": "#05668d",
    "text": "宝坵郭氏若虞公家谱"
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
    "showNrPeople": false
  },
  "enableScreenCapture": true,
  "levelColors": ["#0c058d", "#05668d", "#8d6e05", "#8d2305", "#cfb303"],
  "editCommand": "_edit",
  "dataFields": [{
    "name": "Location",
    "type": "text"
  }],
  "personProperties": [{
    "name": "wife_ma",
    "type": "text",
    "order": 0
  }, {
    "name": "wife_po",
    "type": "text",
    "order": 1
  }, {
    "name": "remark",
    "type": "text",
    "order": 2
  }, {
    "name": "Phone",
    "type": "text",
    "order": 3
  }, {
    "name": "Email",
    "type": "email",
    "order": 4
  }, {
    "name": "Homepage",
    "type": "url",
    "order": 5
  }, {
    "name": "Country",
    "type": "text",
    "order": 6
  }, {
    "name": "City",
    "type": "text",
    "order": 7
  }, {
    "name": "Street",
    "type": "text",
    "order": 8
  }]
}
