'use strict'
const User = use("App/Models/User");


class LoginController {
    async store({ request, auth, response }) {
        const { email, password } = request.all();
        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy("email", email);
                let token = await auth.generate(user);

                //   Object.assign(user, token)
                return response.status(201).json({ user, token: token.token });
            }
        } catch (e) {
            console.log(e);
            return response.status(401).json({ message: "You are not registered!" });
        }
    }
}

module.exports = LoginController
