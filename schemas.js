const Joi = require('joi')

module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string(),
        price: Joi.number().min(0),
        image: Joi.string().required(),
        location: Joi.string(),
        description: Joi.string().required()
    }).required()

});
