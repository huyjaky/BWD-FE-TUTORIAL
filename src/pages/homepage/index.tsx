import { authApi } from "@/api-client";
import { MainLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/models";

const Homepage: NextPageWithLayout = () => {
  const handleLogin = async () => {
    try {
      await authApi.login({
        username: "jajajajau",
        password: "123456",
      });
      console.log('Login successfully');
    } catch (error) {
      console.log("Fail to login", error);
      return;
    }
  };
  const handleLogout = async () => {
    try {
      await authApi.logout();
      console.log('Logout successfully');
    } catch (error) {
      console.log("Fail to logout", error);
      return;
    }
  };

  const handleProfile = async () => {
    try {
      const data = await authApi.getProfile();
      console.log(data);
    } catch (error) {
      console.log('Something go wrong', error);
      return;
    }
  };
  return (
    <div className="flex w-[100%] h-[100vh] flex-col">
      <div className="w-[20%] flex justify-between m-auto">
        <button className="p-[20px] bg-slate-600 rounded-xl text-white" onClick={handleLogin}>
          Login
        </button>
        <button className="p-[20px] bg-slate-600 rounded-xl text-white" onClick={handleLogout}>
          Logout
        </button>
        <button className="p-[20px] bg-slate-600 rounded-xl text-white" onClick={handleProfile}>
          Profile
        </button>
      </div>
    </div>
  );
};

Homepage.Layout = MainLayout;

export default Homepage;
