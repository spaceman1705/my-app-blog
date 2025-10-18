import * as Yup from "yup";

const CreateArticleSchema = Yup.object({
  title: Yup.string().trim().required("Title cannot be empty"),
  content: Yup.string().trim().required("Content cannot be empty"),
  description: Yup.string().trim().required("description cannot be empty"),
  image_path: Yup.string().trim().required("image_path cannot be empty"),
});

export default CreateArticleSchema;
