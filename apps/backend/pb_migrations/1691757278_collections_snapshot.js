migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-08-11 11:24:16.860Z",
      "updated": "2023-08-11 11:24:16.860Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "sfku7doujz2ie2a",
      "created": "2023-08-11 11:38:26.811Z",
      "updated": "2023-08-11 11:55:19.862Z",
      "name": "projects",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "s2g7krhv",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 2,
            "max": 64,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ehedvtc9",
          "name": "tagline",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 2,
            "max": 64,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "fer8wjhs",
          "name": "description",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": 2,
            "max": 512,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "127iupw3",
          "name": "url",
          "type": "url",
          "required": true,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "n2esnfzp",
          "name": "thumbnail",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": [
              "80x80"
            ]
          }
        },
        {
          "system": false,
          "id": "b95cinqy",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "@request.auth.id != \"\" && @request.auth.id = @request.data.user",
      "updateRule": "@request.auth.id = user",
      "deleteRule": "@request.auth.id = user",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
