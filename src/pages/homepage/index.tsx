import { authApi } from "@/api-client";
import { MainLayout } from "@/components/layouts";
import useAuth from "@/hooks/useAuth";
import { NextPageWithLayout } from "@/models";

const Homepage: NextPageWithLayout = () => {
  const {profile, login, logout} = useAuth({
    revalidateOnMount: false
  });

  const handleLogin = async () => {
    try {
      await login();
      console.log('redirect to dashboard');
    } catch (error) {
      return console.log(error);
    }
  };
  const handleLogout = async () => {
    try {
      await logout();
      console.log('redirect to login page');
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <div className="flex w-[100%] h-[100vh] flex-col">
      <div className="w-[20%] flex justify-between m-auto">
        <div>
          {JSON.stringify(profile || {}, null, 4)}
        </div>
        <button className="p-[20px] bg-slate-600 rounded-xl text-white" onClick={handleLogin}>
          Login
        </button>
        <button className="p-[20px] bg-slate-600 rounded-xl text-white" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

Homepage.Layout = MainLayout;

export default Homepage;
