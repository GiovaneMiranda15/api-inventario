import Joi from 'joi';

const setorValidator = Joi.object({
    descricao: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.base': 'O nome deve ser uma string.',
            'string.empty': 'O nome não pode estar vazio.',
            'string.min': 'O nome deve ter pelo menos {#limit} caracteres.',
            'string.max': 'O nome deve ter no máximo {#limit} caracteres.',
            'any.required': 'O nome é obrigatório.'
        })
});

export default setorValidator;