"use client";
import { Formik, Form, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import useAuthStore from "@/stores/authStore";

import { login } from "@/services/auth";
import LoginSchema from "./schema";
import { signIn } from "next-auth/react";

interface ILogin {
  email: string;
  password: string;
}

export default function LoginView() {
  /* const { onLogin } = useAuthStore(); */
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const initialValues = { email: "", password: "" };
  return (
    <div className="flex flex-col gap-12 items-center mt-20">
      <h1 className="text-4xl">Login Page</h1>
      <Formik<ILogin>
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          try {
            const res = await signIn("credentials", {
              email: values.email,
              password: values.password,
              redirect: false,
            });

            console.log("NEXT AUTH RESPONSE",res);

            if (res?.ok) {
              enqueueSnackbar("Login Success", { variant: "success" });

              router.push("/");
            } else {
              throw new Error("User not found");
            }
          } catch (err) {
            if (err instanceof Error) {
              enqueueSnackbar(err.message, { variant: "error" });
            } else {
              console.log(err);
              enqueueSnackbar("Something went wrong", { variant: "error" });
            }
          }
        }}
      >
        {(props: FormikProps<ILogin>) => (
          <Form className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="text"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
              />
              {props.touched.email && props.errors.email && (
                <span className="text-xs text-red-500">
                  *{props.errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="password"
                name="password"
                value={props.values.password}
                onChange={props.handleChange}
              />
              {props.touched.password && props.errors.password && (
                <span className="text-xs text-red-500">
                  *{props.errors.password}
                </span>
              )}
            </div>
            <button
              className="border-none md:h-[35px] md:w-[80px] rounded-md bg-gray-100 hover:bg-gray-200 hover:cursor-pointer text-green-500"
              type="submit"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
