import React from "react";
import AuthWrapper from "../components/AuthWrapper";
import MainWrapper from "../components/MainWrapper";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const List = () => {
  const Item = ({ total = 0, status = "pending" }) => {
    return (
      <Link to="/shopplan">
        <div className="plan-item bg-white rounded-xl border border-gray-50 shadow-md p-5 flex flex-col gap-6 cursor-pointer hover:scale-[102%] transition-all ease-in">
          <p className="item-title text-xl main-text">item 1</p>
          <p className="flex justify-between text-xs main-text">
            <span className="">Total Items: </span>
            <span className="">{status}</span>
          </p>
        </div>
      </Link>
    );
  };

  return (
    <>
      <Layout>
        <div className="relative h-full flex md:block flex-col gap-5">
          <div className="content-header p-3 md:p-6 2xl:px-72 absolute top-3 left-0 right-0">
            <Link to="/create" className="hidden md:block">
              <button
                type="button"
                className="bg-accent primary-action-btn w-40"
              >
                Add Plan
              </button>
            </Link>
            <div className="title-wrapper md:hidden">
              <p className="mb-3">Plans</p>
              <Link to="/create">
                <button
                  type="button"
                  className="bg-accent primary-action-btn w-full"
                >
                  Add Plan
                </button>
              </Link>
            </div>
          </div>
          <div className="content-body p-3 md:p-6 2xl:px-72 flex-1 flex flex-col gap-6 overflow-y-auto pt-44 md:pt-24">
            <Item />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default List;
