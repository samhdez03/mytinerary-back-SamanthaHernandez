import joi from "joi-oid"

const schemaName = joi.object({
    name: joi.string().pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/).required()
        .messages({
            'string.base': 'The name must be a text',
            'string.pattern.base': 'The name must contain only letters and spaces, no special characters allowed',
            'any.required': 'The name field is required'
        })
})
const schemaID = joi.object({
    id: joi.objectId().required().messages({
        'string.pattern.name': 'The ID must be a valid ObjectId from MongoDB',
        'any.required': 'The ID field is required'
    })
})

export { schemaName, schemaID }