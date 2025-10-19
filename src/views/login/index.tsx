"use client";
import { Formik, Form, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState } from "react";
import useAuthStore from "@/stores/authStore";
import { Eye, EyeOff } from "lucide-react";

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
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const initialValues = { email: "", password: "" };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h1>
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

              console.log("NEXT AUTH RESPONSE", res);

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
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
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
              <div className="flex flex-col gap-1 relative">
                <label>Password</label>
                <input className="border border-black rounded-md p-3 w-96 pr-10" 
                  type="password" 
                  name="password" 
                  value={props.values.password} 
                  onChange={props.handleChange} 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {props.touched.password && props.errors.password && (
                  <span className="text-xs text-red-500">
                    *{props.errors.password}
                  </span>
                )}
              </div>
              <button
                className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
                type="submit"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
