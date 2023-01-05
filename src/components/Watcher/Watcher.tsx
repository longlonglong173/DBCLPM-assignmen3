import React, { FC, memo } from "react";

// import { useAppSelector } from "redux/store";

const Watcher: FC = () => {
  // const {
  //   salary: { list: salaryList },
  //   actor: { simple: simpleActor, medium: mediumActor, complex: complexActor },
  // } = useAppSelector(state => state);
  // useEffect(() => {
  //   const handleBeforeUnLoad = (e: BeforeUnloadEvent) => {
  //     e.preventDefault();
  //     e.returnValue = "";
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnLoad);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnLoad);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleUnLoad = () => {
  //     // handle save data here
  //     localStorage.setItem("salary.list", JSON.stringify(salaryList));
  //     localStorage.setItem("actor.simple", JSON.stringify(simpleActor));
  //     localStorage.setItem("actor.medium", JSON.stringify(mediumActor));
  //     localStorage.setItem("actor.complex", JSON.stringify(complexActor));
  //   };
  //   window.addEventListener("unload", handleUnLoad);

  //   return () => {
  //     window.removeEventListener("unload", handleUnLoad);
  //   };
  // }, [complexActor, mediumActor, salaryList, simpleActor]);

  return <></>;
};

export default memo(Watcher);
