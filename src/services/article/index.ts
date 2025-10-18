import axios from "axios";

import { IArticle } from "@/interfaces/article.interface";

export async function getNewestArticles(): Promise<IArticle[]> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/article?pageSize=6&sortBy=%60created%60%20desc`
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function getAll(): Promise<IArticle[]> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/article`
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function getArticleByEmail(email: string): Promise<IArticle[]> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/article?where=email%3D'${email}'`
    );

    return data;
  } catch (err) {
    throw err;
  }
}

export async function getArticleBySlug(slug: string): Promise<IArticle[]> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/article?where=slug%3D'${slug}'`
    );

    return data[0];
  } catch (err) {
    throw err;
  }
}

export async function createArticle(
  params: Partial<IArticle>
): Promise<IArticle[]> {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/article`,
      {
        ...params,
      }
    );

    return data;
  } catch (err) {
    console.error("Create article failed:", err)
    throw err;
  }
}
