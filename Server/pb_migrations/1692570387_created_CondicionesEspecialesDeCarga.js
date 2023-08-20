/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2w3i5st8k35qfgc",
    "created": "2023-08-20 22:26:27.214Z",
    "updated": "2023-08-20 22:26:27.214Z",
    "name": "CondicionesEspecialesDeCarga",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zjfwrsoj",
        "name": "Descripcion",
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
        "id": "xmw1eayu",
        "name": "Estado",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2w3i5st8k35qfgc");

  return dao.deleteCollection(collection);
})
