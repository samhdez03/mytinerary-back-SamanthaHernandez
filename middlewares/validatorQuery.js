const validateQuery = (schema) => (req, res, next) => {
    const validation = schema.validate(req.query, { abortEarly: false });
    if (validation.error) {
        console.log("Validations errors:", validation.error.details);
        return res.status(400).json({
            success: false,
            message: validation.error.details.map((error) => error.message) // Muestra todos los errores
        });
    }
    return next()
}
export default validateQuery

