/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "biidljymanaentp",
    "created": "2023-08-20 20:46:46.460Z",
    "updated": "2023-08-20 20:46:46.460Z",
    "name": "Camion",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "q61whurr",
        "name": "patenteCamion",
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
        "id": "bn3qyr49",
        "name": "patenteAcoplado",
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
        "id": "eze456or",
        "name": "nombreTitular",
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
        "id": "uxtxfrxk",
        "name": "cuitTitular",
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
        "id": "lvmxbgf4",
        "name": "tipoCamion",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "79bz2a86lrfd3yi",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "3lf7johx",
        "name": "tipoCombustible",
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
        "id": "rbjo8m6p",
        "name": "largoAcoplado",
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
  const collection = dao.findCollectionByNameOrId("biidljymanaentp");

  return dao.deleteCollection(collection);
})
