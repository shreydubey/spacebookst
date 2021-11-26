import Validator from 'validator'
import isEmpty from 'is-empty'

export default function validateOrder(data) {
    let errors = {};



    // orderItems,
    // shippingAddress,
    // paymentMethod,
    // totalPrice,
    // Convert empty fields to an empty string so we can use validator functions
    data.orderItems = !isEmpty(data.orderItems) ? data.orderItems : "";
    data.shippingAddress = !isEmpty(data.shippingAddress) ? data.shippingAddress : "";
    data.paymentMethod = !isEmpty(data.paymentMethod) ? data.paymentMethod : "";
    data.itemsPrice = !isEmpty(data.itemsPrice) ? data.itemsPrice : "";
    data.taxPrice = !isEmpty(data.taxPrice) ? data.taxPrice : "";
    data.shippingPrice = !isEmpty(data.shippingPrice) ? data.shippingPrice : "";
    data.totalPrice = !isEmpty(data.totalPrice) ? data.totalPrice : "";
    
  
    // orderItems checks
    if (Validator.isEmpty(data.orderItems)) {
      errors.orderItems = "orderItems is required";
    }
    if (Validator.isInt(data.orderItems,{ min: 1, max: 3000 })) {
        errors.orderItems = "orderItems is required";
    }
  
    // shippingAddress checks
    if (Validator.isEmpty(data.shippingAddress)) {
      errors.shippingAddress = "shippingAddress field is required";}
    // } else if (!Validator.isEmail(data.email)) {
    //   errors.email = "Email is invalid";
    // }
  
    // paymentMethod checks
    if (Validator.isEmpty(data.paymentMethod)) {
      errors.paymentMethod = "paymentMethod field is required";
    }
  
    if (Validator.isEmpty(data.totalPrice)) {
      errors.totalPrice = "totalPrice field is required";
    }
    if (!Validator.isNumeric(data.totalPrice)) {
        errors.totalPrice = "totalPrice should be numeric";
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
};