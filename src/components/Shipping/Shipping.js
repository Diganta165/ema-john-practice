import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
 
    const onSubmit = data => console.log(data);

    return (
        <div>
             /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={user.displayName} {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={user.email} {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
      <input placeholder="address" defaultValue="" {...register("address")} />
      <input placeholder="city" defaultValue="" {...register("city")} />
      <input placeholder="phone number" defaultValue="" {...register("phone")} />

      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;