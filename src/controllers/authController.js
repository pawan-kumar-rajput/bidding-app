import authService from "../services/authService.js";

export async function register(req, res) {
  try {
    const message = await authService.register(req.body);
    res.send({ status: "success", message });
  } catch (error) {
    res.status(400).send({ status: "error", message: error.message });
  }
}

export async function login(req, res) {
  try {
    const token = await authService.login(req.body);
    res.header("Authorization", token).send({
      status: "success",
      message: "login successfull",
      data: { token },
    });
  } catch (error) {
    res.status(400).send({ status: "error", message: error.message });
  }
}

export async function getProfile(req, res) {
  try {
    const user = await authService.getProfile(req.user.id);
    res.send({ status: "success", message: "user profile", data: user });
  } catch (error) {
    res.status(404).send({ status: "error", message: error.message });
  }
}
