const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })
        if (validation.error) {
            console.log("Errores de validación:", validation.error.details);
            return res.status(400).json({
                success: false,
                message: validation.error.details.map((error) => error.message) // Muestra todos los errores
            });
        }
        return next()
    }
];

export default validator