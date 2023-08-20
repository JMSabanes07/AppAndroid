/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "79bz2a86lrfd3yi",
    "created": "2023-08-20 20:19:08.449Z",
    "updated": "2023-08-20 20:19:08.449Z",
    "name": "tipoCamion",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4a76shz8",
        "name": "idTipoCamion",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "inkxlsto",
        "name": "TC_Descripcion",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi");

  return dao.deleteCollection(collection);
})
