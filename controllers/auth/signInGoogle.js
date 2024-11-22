export default async(req, res, next) => {
    try {
        const frontendURL = process.env.FRONTEND_URL || "http://localhost:3000";
        console.log("", frontendURL)
        // Redirige al frontend con el token como query parameter
        const token = req.token; // Generado por el middleware `generateToken`
        const user = req.user; // Información del usuario
  
        if (!token || !user) {
          return res.status(400).send("Authentication failed.");
        }
  
        res.redirect(
          `${frontendURL}?token=${token}&name=${user.name}&lastName=${user.lastName}&email=${user.email}&photo=${user.photo}`
        );
      } catch (error) {
        console.error("Error during Google callback:", error);
        res.status(500).send("Internal Server Error");
      }
    }
