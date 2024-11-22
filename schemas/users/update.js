import joi from "joi-oid"

const schemaNameUpdate = joi.object({
    name: joi.string().pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)
        .messages({
            'string.base': 'The name must be a text',
            'string.pattern.base': 'The name must contain only letters and spaces, no special characters allowed',
            'any.required': 'The name field is required'
        })
})

const schemaBody = joi.object({
    name: joi.string().pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .messages({
        'string.base': 'The name must be a text',
        'string.pattern.base': 'The name must contain only letters and spaces, no special characters allowed',
    }),
    lastName: joi.string().pattern(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .messages({
        'string.base': 'The last name must be a text',
        'string.pattern.base': 'The last name must contain only letters and spaces, no special characters allowed',
    }),
    email: joi.string().email().messages({
        'string.email': 'The email must have a valid format',
    }),
    photo: joi.string().uri().messages({
        'string.uri': 'The photo must be a valid URL',
    }),
    country: joi.string().messages({
        'string.base': 'The country must be a text',
    })
})


export {schemaNameUpdate, schemaBody}