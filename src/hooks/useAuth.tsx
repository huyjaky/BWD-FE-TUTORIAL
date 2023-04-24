import { authApi } from "@/api-client";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

const useAuth = (options?: Partial<PublicConfiguration>) => {
  const MILS_TO_HOURS = 60 * 60 * 1000;

  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: MILS_TO_HOURS,
    revalidateOnFocus: false,
    ...options,
  });

  const login = async () => {
    await authApi.login({
      username: "jajajajau",
      password: "123456",
    });

    await mutate();
  };
  const logout = async () => {
    await authApi.logout();
    mutate({}, false);
  };

  return {
    profile,
    error,
    login,
    logout
  };
};

export default useAuth;
