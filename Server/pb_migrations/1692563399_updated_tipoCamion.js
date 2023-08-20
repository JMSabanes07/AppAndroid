/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "thdctqdo",
    "name": "TC_OtrosDetalles",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  // remove
  collection.schema.removeField("thdctqdo")

  return dao.saveCollection(collection)
})
