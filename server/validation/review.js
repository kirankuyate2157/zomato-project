import joi from "joi";

export const ValidateReview = (userData) => {
  const Schema = joi.object({
    User: joi.object().required(),
  });
  return Schema.validateAsync(userData);
};
