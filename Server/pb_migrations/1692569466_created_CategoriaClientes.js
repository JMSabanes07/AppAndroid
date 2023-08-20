/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tf6x70w6i41lngu",
    "created": "2023-08-20 22:11:06.728Z",
    "updated": "2023-08-20 22:11:06.728Z",
    "name": "CategoriaClientes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dglsng64",
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
        "id": "nvacobn4",
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
  const collection = dao.findCollectionByNameOrId("tf6x70w6i41lngu");

  return dao.deleteCollection(collection);
})
