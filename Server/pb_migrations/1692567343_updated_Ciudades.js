/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1p1tl8a19w3c2uj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yerzd3nr",
    "name": "idProvincia",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ajn8gfj7vtqp5d2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1p1tl8a19w3c2uj")

  // remove
  collection.schema.removeField("yerzd3nr")

  return dao.saveCollection(collection)
})
