import axios from "axios";
export async function register(params: { email: string; password: string }) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/user`,
      {
        ...params,
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
}

export async function login(params: { email: string; password: string }) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/user?where=email%3D'${params.email}'%20and%20password%3D'${params.password}'`
    );

    return data;
  } catch (err) {
    throw err;
  }
}