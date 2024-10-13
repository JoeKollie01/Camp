const Joi = require('joi');
const sanitizeHtml = require('sanitize-html');


//Define a custom Joi validation for HTML escape/sanitize

const escapeHTML = (value, helpers) => {
    const clean = sanitizeHtml(value, {
        allowedTags: [], //Remove all HTML tags
        allowedAttributes: {}, //Remove all attributes
    });
    if (clean !== value) {
        return helpers.error('string.escapeHTML', { value });
    }
    return clean; // Return the sanitized string
}

// const extension = (joi) => ({
//     type: 'string',
//     base: joi.string(),
//     messages: {
//         'string.escapeHTML': '{{#label}} must not include HTML!'
//     },
//     rules: {
//         escapeHTML: {
//             Validate(value, helpers) {
//                 const clean = sanitizeHtml(value, {
//                     allowedTags: [],
//                     allowedAttributes: {},
//                 });
//                 if (clean !== value) return helpers.error('string.escapeHTML', {value})
//                 return clean;
//             }
//         }
//     }

// });

// const Joi = Joi.extend(extension)

module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().custom(escapeHTML).message({'string.escapeHTML': 'Title must not include HTML tags!'}),
        price: Joi.number().min(0),
        // image: Joi.string().required(),
        location: Joi.string().custom(escapeHTML).message({'string.escapeHTML': 'Title must not include HTML tags!'}),
        description: Joi.string().required().custom(escapeHTML).message({'string.escapeHTML': 'Title must not include HTML tags!'})
    }).required(),
    deleteImages:Joi.array()

});


module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required().custom(escapeHTML).message({'string.escapeHTML': 'Title must not include HTML tags!'})
    }).required()
})


