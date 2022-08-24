import joi from "joi";

export const ValidateOrderId = (resId) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });
  return Schema.validateAsync(resId);
};

export const ValidateOrderDetails = (orderObj) => {
  const Schema = joi.object({
    orderDetails: joi.array().items(
      joi.object({
        quantity: joi.number().required(),
        payMode: joi.string().required(),
        status: joi.string(),
        paymentDetails: {
          itemTotal: joi.number().required(),
          promo: joi.string().required(),
          tax: joi.number().required(),
        },
      })
    ),
  });
  return Schema.validateAsync(orderObj);
};
