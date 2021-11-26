import {assert} from 'chai';

import  validateLoginInput from '../validation/uservalidation.js'
import  validateRegisterInput from '../validation/userRegisterValidation.js'
import validateOrder from '../validation/orderValidation.js'
// const register = require('../validation/register');
// const update = require('../validation/update');

var name = ['skf','dskf','sf12j%','#12',''];
var email = ['s@s.com','gfc.com','skg@gmail.in','','@.','skand@gmail.com',''];
var password = ['s1234','s@154',' ','12%ub','abs@243652',''];
    // orderItems,
    // shippingAddress,
    // paymentMethod,
    // totalPrice,
var orderItems = ['-1','0','1','30',''];
var shippingAddress = ['sanawad 456789','silicon city,indore,454729',''];
var paymentMethod = ['PayPal or Credit Card',''];
var totalPrice = ['27','$4567','48.5','free','0',''];


email.forEach(em =>{
    password.forEach(pw =>{
        describe('validateLoginInput',function(){
            var data ={
                email : em,
                password :pw
            };
            it('It should not return error',function(){
                assert.isEmpty(validateLoginInput(data).errors);
            });
        });
    });
});

 name.forEach(nam =>{
     password.forEach(pw =>{
         email.forEach(em =>{    
                         describe('validateRegisterInput',function(){
                             var data ={
                                 name : nam,
                                email : em,
                               password : pw,
                                 password2 : pw,
                             };
                          it('It should not return error',function(){
                                 assert.isEmpty(validateRegisterInput(data).errors);
                            });
                        });
         });
     });
 });

 orderItems.forEach(ord =>{
    shippingAddress.forEach(shp =>{
        paymentMethod.forEach(pay =>{
            totalPrice.forEach(tpr =>{
                        describe('validateOrder',function(){
                            var data ={
                                orderItems : ord,
                                shippingAddress : shp,
                                paymentMethod : pay,
                                totalPrice : tpr, 
                            };
                            it('It should not return error',function(){
                                assert.isEmpty(validateOrder(data).errors);
                            });
                        });
                    });
        });
    });
});