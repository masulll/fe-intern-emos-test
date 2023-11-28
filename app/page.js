"use client";
import { useRouter } from "next/navigation";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Home() {
  const router = useRouter();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(10, "too short")
      .max(15, "too long")
      .required("Required"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password ahould contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      ),
  });

  return (
    <main className="max-w-xl min-h-screen mx-auto flex justify-center items-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
          sessionStorage.setItem("data", JSON.stringify(values));
          router.push("/login");
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            <label className="top-10 absolute ">Halaman Login</label>
            <label className="">Email</label>
            <Field
              name="email"
              type="email"
              className="border-2  border-black rounded-md"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label className="">Password</label>
            <Field
              name="password"
              type="password"
              className="border-2  border-black rounded-md"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit" className="bg-indigo-500 my-2">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}
