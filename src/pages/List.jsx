import React from "react";
import AuthWrapper from "../components/AuthWrapper";
import MainWrapper from "../components/MainWrapper";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

const List = () => {
  const Item = ({ total = 0, status = "pending" }) => {
    return (
      <div className="plan-item bg-white rounded-xl border border-gray-50 shadow-md p-5 flex flex-col gap-6">
        <p className="item-title text-xl main-text">item 1</p>
        <p className="flex justify-between text-xs main-text">
          <span className="">Total Items: </span>
          <span className="">{status}</span>
        </p>
      </div>
    );
  };

  return (
    <>
      <Layout>
        <div className="relative h-full flex flex-col gap-5">
          <div className="content-header p-6 fixed top-3">
            <button
              type="button"
              className="rounded bg-accent w-40 p-2 text-white text-sm shadow"
            >
              Add Plan
            </button>
          </div>
          <div className="content-body p-6 flex-1 flex flex-col gap-6 overflow-y-auto pt-24">
            <Item />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default List;
