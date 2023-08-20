/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l45uz0v2z99ga6n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohmebwkk",
    "name": "EmiteComprobante",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "tvasa9ssyfw1y7z",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l45uz0v2z99ga6n")

  // remove
  collection.schema.removeField("ohmebwkk")

  return dao.saveCollection(collection)
})
