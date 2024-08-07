import bcrypt from "bcryptjs";

const generatePassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword)
  return hashedPassword
}

export default generatePassword

