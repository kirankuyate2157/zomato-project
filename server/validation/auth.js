import joi from "joi";

export const ValidateSignup = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().required().min(6),
    email: joi.string().email().required(),
    password: joi.string().min(5),
    address: joi
      .array()
      .items(joi.object({ details: joi.string(), for: joi.string() })),
    phoneNumber: joi.number(),
  });
  return Schema.validateAsync(userData);
};

export const ValidateSignin = (userData) => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });
  return Schema.validateAsync(userData);
};
