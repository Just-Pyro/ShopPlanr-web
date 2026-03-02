import React from "react";
import Layout from "../components/Layout";

const Settings = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="border border-gray-50 shadow bg-white rounded-xl p-6 flex gap-6">
          <div className="profile w-16 h-16 rounded-full border border-gray-200 bg-gray-200 flex justify-center items-center text-3xl font-bold main-text">
            AU
          </div>
          <div className="flex-1 flex flex-col justify-between py-1">
            <p className="text-2xl main-text">Admin User</p>
            <p className="italic text-gray-400">admin.user@test.com</p>
          </div>
          <div className="flex flex-col justify-end pb-1">
            <p className="italic text-gray-400">v1.0</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
