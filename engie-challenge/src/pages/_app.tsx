import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
<<<<<<< HEAD
    <Component {...pageProps} />
=======
      <Component {...pageProps} />
      
>>>>>>> develop
  )
};

export default api.withTRPC(MyApp);
