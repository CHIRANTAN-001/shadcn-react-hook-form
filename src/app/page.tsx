"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Fragment, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

type Inputs = {
  firstName: string;
  lastName: string;
  gender: GenderEnum;
}

export default function Home() {

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    // Register gender field since Select is a custom component
    register("gender", { required: true });
  }, [register]);

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  // console.log(watch("email"))
  // console.log(watch("password"))
  console.log(watch("gender"));
  

  return (
    <Fragment>
      <div className="flex justify-center items-center mt-10">
        <span className="text-4xl font-bold text-center">React Hook Form</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-y-5 mt-14">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          placeholder="Enter first name"
          className="py-2 w-1/5 border border-black rounded-md px-3"
          {...register("firstName", {
            required: true,
          })}
        />
        {errors.firstName && <span className="text-red-700">This field is required</span>}
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          placeholder="Enter last name"
          className="py-2 w-1/5 border border-black rounded-md px-3"
          {...register("lastName", {
            required: true,
          })}
        />
        {errors.lastName && <span className="text-red-700">This field is required</span>}
        <Label htmlFor="gender" className="text-start">Gender</Label>
        <Select
          onValueChange={(value) => setValue("gender", value as GenderEnum)}
        >
          <SelectTrigger className="py-2 w-1/5 border-black rounded-md">
            <SelectValue placeholder="Select your gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <button type="submit" className="bg-black text-white px-10 py-3 rounded-md">Submit</button>
      </form>
    </Fragment>
  );
}
