/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  // remove
  collection.schema.removeField("4a76shz8")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("79bz2a86lrfd3yi")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
