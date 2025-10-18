"use client";

import { Formik, Form, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import useAuthStore from "@/stores/authStore";

import { createArticle } from "@/services/article";

import RegisterSchema from "../schema";

interface ICreateArticleForm {
  title: string;
  image_path: string;
  description: string;
  content: string;
}

export default function CreateArticleForm({
  fetchData,
}: {
  fetchData: () => void;
}) {
  const { email } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();
  const initialValues = {
    title: "",
    image_path: "",
    description: "",
    content: "",
  };

  const toSlug = (title: string) => {
    return title
      .toLowerCase() // convert to lowercase
      .trim() // remove leading/trailing spaces
      .replace(/[^\w\s-]/g, "") // remove non-word characters except spaces/hyphens
      .replace(/\s+/g, "-") // replace spaces with hyphens
      .replace(/-+/g, "-"); // collapse multiple hyphens
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <Formik<ICreateArticleForm>
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const slug = toSlug(values.title);
            await createArticle({
              title: values.title,
              description: values.description,
              image_path: values.image_path,
              content: values.content,
              email,
              slug,
            });
            enqueueSnackbar("Create New Article Success", {
              variant: "success",
            });
          } catch (err) {
            if (err instanceof Error) {
              enqueueSnackbar(err.message, { variant: "error" });
            } else {
              console.log(err);
              enqueueSnackbar("Something went wrong", { variant: "error" });
            }
          } finally {
            resetForm();
            fetchData();
          }
        }}
      >
        {(props: FormikProps<ICreateArticleForm>) => (
          <Form className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="text"
                name="title"
                value={props.values.title}
                onChange={props.handleChange}
              />
              {props.touched.title && props.errors.title && (
                <span className="text-xs text-red-500">
                  *{props.errors.title}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Image Path</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="text"
                name="image_path"
                value={props.values.image_path}
                onChange={props.handleChange}
              />
              {props.touched.image_path && props.errors.image_path && (
                <span className="text-xs text-red-500">
                  *{props.errors.image_path}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Description</label>
              <input
                className="border border-black rounded-md p-3 w-96"
                type="text"
                name="description"
                value={props.values.description}
                onChange={props.handleChange}
              />
              {props.touched.description && props.errors.description && (
                <span className="text-xs text-red-500">
                  *{props.errors.description}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Content</label>
              <textarea
                className="border border-black rounded-md p-3 w-96"
                cols={6}
                name="content"
                value={props.values.content}
                onChange={props.handleChange}
              ></textarea>
              {props.touched.content && props.errors.content && (
                <span className="text-xs text-red-500">
                  *{props.errors.content}
                </span>
              )}
            </div>
            <button
              className="border-none md:h-[35px] md:w-[120px] rounded-md bg-gray-100 hover:bg-gray-200 hover:cursor-pointer text-green-500"
              type="submit"
            >
              Create Article
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
