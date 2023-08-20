/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c8vmoypk",
    "name": "IdCiudad",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1p1tl8a19w3c2uj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // remove
  collection.schema.removeField("c8vmoypk")

  return dao.saveCollection(collection)
})
