/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tvasa9ssyfw1y7z",
    "created": "2023-08-20 21:56:07.560Z",
    "updated": "2023-08-20 21:56:07.560Z",
    "name": "ComprobantesFicales",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xdinh5hy",
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
        "id": "cwrcnk3h",
        "name": "EmiteLetra",
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
        "id": "xpcbjced",
        "name": "DiscriminaIva",
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
  const collection = dao.findCollectionByNameOrId("tvasa9ssyfw1y7z");

  return dao.deleteCollection(collection);
})
