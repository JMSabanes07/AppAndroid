/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l45uz0v2z99ga6n",
    "created": "2023-08-20 21:54:24.979Z",
    "updated": "2023-08-20 21:54:24.979Z",
    "name": "CondicionFiscal",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2erwzvl2",
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
        "id": "udll2kx2",
        "name": "CodigoInternoAfip",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("l45uz0v2z99ga6n");

  return dao.deleteCollection(collection);
})
