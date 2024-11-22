export default async(req, res, next) => {
    try {
        const frontendURL = process.env.FRONTEND_URL || "http://localhost:3000"
        const token = req.token 
        const user = req.user 
  
        if (!token || !user) {
          return res.status(400).send("Authentication failed.")
        }
  
        res.redirect(
          `${frontendURL}?token=${token}&name=${user.name}&lastName=${user.lastName}&email=${user.email}&photo=${user.photo}&_id=${user._id}&country=${user.country}`
        )
      } catch (error) {
        console.error("Error during Google callback:", error)
        res.status(500).send("Internal Server Error")
      }
    }
