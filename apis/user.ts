import { UserType } from "@/types/user";
import axios from "axios";

export const fetchUser = async (token: string): Promise<UserType> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/jwt`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data.user;
};
