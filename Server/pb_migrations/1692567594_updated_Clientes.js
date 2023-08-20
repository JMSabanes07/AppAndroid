/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w4z06zrq",
    "name": "Telefono",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // remove
  collection.schema.removeField("w4z06zrq")

  return dao.saveCollection(collection)
})
