import { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "components/Loader";

export interface IRegisterProps {
  pageTransitionDelayEnter: boolean;
  pageTransitionReadyToEnter?(): void;
}

const Register = (props: IRegisterProps) => {
  const [loaded, setLoaded] = useState(false);
  const { pageTransitionReadyToEnter } = props;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      pageTransitionReadyToEnter();
      setLoaded(true);
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pageTransitionReadyToEnter]);

  // if (!loaded) return null;

  return (
    <div style={{ marginTop: "200px", display: "flex" }}>
      <Loader size="small" />
      <Loader />
      <Loader size="large" />
      <h1>
        <Link href="/">BACK</Link>
      </h1>
    </div>
  );
};

Register.pageTransitionDelayEnter = true;

export default Register;
