import React, { FC, memo, useEffect } from "react";

import { useAppSelector } from "redux/store";

const Watcher: FC = () => {
  const { list: salaryList } = useAppSelector(state => state.salary);
  useEffect(() => {
    const handleBeforeUnLoad = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnLoad);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnLoad);
    };
  }, []);

  useEffect(() => {
    const handleUnLoad = () => {
      // handle save data here
      localStorage.setItem("salary.list", JSON.stringify(salaryList));
    };
    window.addEventListener("unload", handleUnLoad);

    return () => {
      window.removeEventListener("unload", handleUnLoad);
    };
  }, [salaryList]);

  return <></>;
};

export default memo(Watcher);
