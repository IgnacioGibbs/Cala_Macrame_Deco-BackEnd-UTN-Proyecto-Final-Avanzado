const User = require("../models/User");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");
const { sendEmail } = require("../services/nodemailer");
const { v4: uuid } = require("uuid");
const jwtOptions = { algorithm: "RS256", expiresIn: "1h" };

exports.signUp = async (req, res) => {
  try {
    const { username, password, email, roles, name, surname, birthYear, cel } =
      req.body;

    const uid = uuid();

    const newUser = new User({
      username,
      password: await User.encryptPassword(password),
      email,
      name,
      surname,
      birthYear,
      cel,
      uuidEmail: uid,
    });
    console.log("newUser", newUser);
    if (roles) {
      // Busco el id de los roles asignado, si no lo encuentra uso User por defecto
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    await sendEmail({
      email: email,
      body: `<table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody>
          <tr>
              <td class="m_-2724877240308992397minwidth" align="center" style="min-width:512px;background-color:#f3f3f3">
                  <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tbody>
                          <tr>
                              <td>
                                  <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                      <tbody>
                                          <tr>
                                              <td align="center">
                                                  <table class="m_-2724877240308992397w100" align="center" width="512"
                                                      border="0" cellspacing="0" cellpadding="0">
                                                      <tbody>
                                                          <tr>
                                                              <td class="m_-2724877240308992397padt10m m_-2724877240308992397padb10m"
                                                                  align="center"
                                                                  style="background-color:white;padding-top:15px;padding-bottom:15px">
                                                                  <table width="85%" border="0" align="center"
                                                                      cellpadding="0" cellspacing="0">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td background="https://ci3.googleusercontent.com/proxy/_Oh9R1uQQstkza9u8Vuka-7dSpbstukWJCUHY1uH_QluT_KVwIjJGxSC2xK1C3N1sC1RhcQDMaL0O62e0bbPccEBVmuQV5vybLhcrri7EMJr-A2iXau3yEALnZlaAvKMwIO6XsdR-9M53nf9ySX-b68=s0-d-e1-ft#https://static.cdn.responsys.net/i5/responsysimages/content/linkedin/Premium-Banner-Orange.png"
                                                                                  align="center"
                                                                                  style="background-size:cover;background-position:right center;background-repeat:no-repeat;background-color:#ffffff;width:100%">
                                                                                  <div>
                                                                                      <table width="100%" border="0"
                                                                                          cellspacing="0" cellpadding="0">
                                                                                          <tbody>
                                                                                              <tr>
                                                                                                  <td class="m_-2724877240308992397padt0"
                                                                                                      align="center"
                                                                                                      style="padding-top:25px;padding-bottom:35px">
                                                                                                      <table
                                                                                                          class="m_-2724877240308992397w100"
                                                                                                          width="85%"
                                                                                                          border="0"
                                                                                                          align="center"
                                                                                                          cellpadding="0"
                                                                                                          cellspacing="0">
                                                                                                          <tbody>
                                                                                                              <tr>
                                                                                                                  <td>
                                                                                                                      <table
                                                                                                                          class="m_-2724877240308992397w100"
                                                                                                                          width="100%"
                                                                                                                          border="0"
                                                                                                                          align="left"
                                                                                                                          cellpadding="0"
                                                                                                                          cellspacing="0">
                                                                                                                          <tbody>
                                                                                                                              <tr>
                                                                                                                                  <td class="m_-2724877240308992397expandm"
                                                                                                                                      align="center"
                                                                                                                                      width="70%"
                                                                                                                                      style="padding-top:10px">
                                                                                                                                      <table
                                                                                                                                          class="m_-2724877240308992397w85"
                                                                                                                                          width="100%"
                                                                                                                                          border="0"
                                                                                                                                          align="center"
                                                                                                                                          cellpadding="0"
                                                                                                                                          cellspacing="0">
                                                                                                                                          <tbody>
                                                                                                                                              <tr>
                                                                                                                                                  <td class="m_-2724877240308992397center m_-2724877240308992397padt20m"
                                                                                                                                                      style="font-size:24px;font-family:Helvetica Neue,Arial,sans-serif;color:#4d4d4d;text-align:left">
                                                                                                                                                      ¡Gracias
                                                                                                                                                      ${username}<br
                                                                                                                                                          class="m_-2724877240308992397hide">
                                                                                                                                                      por
                                                                                                                                                      registrarte!
                                                                                                                                                  </td>
                                                                                                                                              </tr>
                                                                                                                                          </tbody>
                                                                                                                                      </table>
                                                                                                                                  </td>
                                                                                                                                  <td>
                                                                                                                              </tr>
                                                                                                                          </tbody>
                                                                                                                      </table>
                                                                                                                  </td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
  
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </div>
  
                                                                              </td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td align="center"
                                                                                  style="background-color:white;padding-top:25px;padding-bottom:15px">
                                                                                  <table width="85%" border="0"
                                                                                      align="center" cellpadding="0"
                                                                                      cellspacing="0">
                                                                                      <tbody>
                                                                                          <tr>
                                                                                              <td class="m_-2724877240308992397h2m"
                                                                                                  style="font-size:15px;font-family:Helvetica Neue,Arial,sans-serif;color:#4d4d4d;text-align:left;line-height:1.4em">
                                                                                                  Hola, ${name}:<br><br>
                                                                                                  Para poder continuar con
                                                                                                  tu registro necesitamos
                                                                                                  que cliqueés el boton
                                                                                                  que te dejamos aquí
                                                                                                  abajo 👇🏽
                                                                                              </td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                              <td align="center"
                                                                                                  style="padding-top:25px">
                                                                                                  <table border="0"
                                                                                                      align="center"
                                                                                                      cellpadding="0"
                                                                                                      cellspacing="0">
                                                                                                      <tbody>
                                                                                                          <tr>
                                                                                                              <td align="center"
                                                                                                                  style="background-color:#0084bf;border-radius:2px;overflow:hidden">
                                                                                                                  <table
                                                                                                                      width="100%"
                                                                                                                      border="0"
                                                                                                                      cellspacing="0"
                                                                                                                      cellpadding="0">
                                                                                                                      <tbody>
                                                                                                                          <tr>
  
                                                                                                                              <td class="m_-2724877240308992397height0"
                                                                                                                                  height="25"
                                                                                                                                  style="padding-left:16px;padding-right:16px;font-family:Helvetica Neue,Arial,sans-serif;font-size:14px;text-align:center;color:white;font-weight:bold">
                                                                                                                                  <a href="${process.env.URL_SERVER}:${process.env.PORT_SERVER}/api/auth/verify/${uid}"
                                                                                                                                      style="text-decoration:none"
                                                                                                                                      target="_blank"><span
                                                                                                                                          style="display:block;width:100%;padding-top:7px;padding-bottom:7px;color:#ffffff">Validar&nbsp;email</span></a>
                                                                                                                              </td>
                                                                                                                          </tr>
                                                                                                                      </tbody>
                                                                                                                  </table>
                                                                                                              </td>
                                                                                                          </tr>
                                                                                                      </tbody>
                                                                                                  </table>
                                                                                              </td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                              <td class="m_-2724877240308992397h2m"
                                                                                                  style="font-size:15px;font-family:Helvetica Neue,Arial,sans-serif;color:#4d4d4d;text-align:left;line-height:1.4em">
                                                                                                  <br>Te esperamos para
                                                                                                  que descubras todos
                                                                                                  nuestros productos, y
                                                                                                  diseñes tus espacios
                                                                                                  como siempre soñaste!
                                                                                              </td>
                                                                                          </tr>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                          <t </tbody> </table> </td> </tr> </tbody> </table> <table
                                                              width="100%" border="0" align="center" cellpadding="0"
                                                              cellspacing="0">
                                                      <tbody>
                                                          <tr>
                                                              <td align="center">
                                                                  <table class="m_-2724877240308992397width320"
                                                                      width="512" border="0" align="center"
                                                                      cellpadding="0" cellspacing="0"
                                                                      style="background-color:#f2f2f2">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td class="m_-2724877240308992397width12"
                                                                                  width="24" height="30" align="left"
                                                                                  valign="top"></td>
                                                                              <td class="m_-2724877240308992397width296"
                                                                                  width="464" align="left" valign="top">
                                                                              </td>
                                                                              <td class="m_-2724877240308992397width12"
                                                                                  width="24"></td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td class="m_-2724877240308992397width12"
                                                                                  width="24" align="left" valign="top">
                                                                              </td>
                                                                              <td class="m_-2724877240308992397width296"
                                                                                  width="464" align="center" valign="top">
                                                                                  <table
                                                                                      class="m_-2724877240308992397width296"
                                                                                      width="450" border="0"
                                                                                      align="center" cellpadding="0"
                                                                                      cellspacing="0">
                                                                                      <tbody>
                                                                                          <tr>
                                                                                              <td align="center"
                                                                                                  valign="top"
                                                                                                  style="font-family:Helvetica,Arial,sans-serif;font-size:12px;font-weight:normal;color:#737373;line-height:normal">
                                                                                                  © 2021,Cala Macrame
                                                                                                  Deco. Todos
                                                                                                  los derechos reservados.
                                                                                              </td>
                                                                                          </tr>
                                                                                      </tbody>
                                                                                  </table>
                                                                              </td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td class="m_-2724877240308992397width12"
                                                                                  width="24" height="30" align="left"
                                                                                  valign="top"></td>
                                                                              <td class="m_-2724877240308992397width296"
                                                                                  width="464" align="left" valign="top">
                                                                              </td>
                                                                              <td class="m_-2724877240308992397width12"
                                                                                  width="24"></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                      </tbody>
                  </table>`,
    });

    await newUser.save(); // Guardo el usuario en la DB

    const payload = {
      id: newUser._id,
      username: newUser.username,
      roles: newUser.roles,
    };

    const token = jwt.sign(payload, privateKey, jwtOptions); // Genero el token

    res
      .status(200)
      .json({ JWT: token, data: payload, message: "User saved successfully" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email: email }).populate("roles");

    if (!userFound) return res.status(406).json({ message: "User not found" });

    const matchPassword = await User.comparePassword(
      password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({ token: null, message: "Invalid password" });

    const payload = {
      id: userFound._id,
      username: userFound.username,
      roles: userFound.roles,
    };

    const token = jwt.sign(payload, privateKey, jwtOptions);

    res.json({ token: token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.verify = async (req, res) => {
  try {
    const { uid } = req.params;
    await User.updateOne({ uuidEmail: uid }, { $set: { enabled: true } });
    res.status(200).redirect("/api/auth/verified");
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.verified = (req, res) => {
  res.status(200).json({ message: "Verified route" });
};
