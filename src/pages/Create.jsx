import React from "react";
import Layout from "../components/Layout";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Create = () => {
  const ProductItems = () => {
    return (
      <>
        <div className="product-item">
          <div className="flex gap-6">
            <div className="flex flex-col">
              <label className="ps-5" htmlFor="">
                Item Name
              </label>
              <input
                type="text"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200"
                placeholder="(e.g. Coke 1 can)"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="ps-5" htmlFor="">
                Expected Quantity
              </label>
              <input
                type="text"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-46"
                placeholder="0"
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                className="rounded-xl p-2 bg-emphasis text-white cursor-pointer hover:opacity-85 transition-all ease-in"
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout className="flex flex-col">
      <div className="plan-header">
        <div className="title-wrapper main-text">Create Plan</div>
        <div className="plan-fields-wrapper">
          <div className="flex gap-6">
            <div className="flex flex-col flex-1">
              <label className="ps-5" htmlFor="">
                Address
              </label>
              <input
                type="text"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-full"
                placeholder="Type Shop Address/Name here..."
              />
            </div>
            <div className="flex flex-col">
              <label className="ps-5" htmlFor="">
                Date Scheduled
              </label>
              <input
                type="text"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200"
                placeholder="Fri Feb 27, 2026"
              />
            </div>
            <div className="flex flex-col">
              <label className="ps-5" htmlFor="">
                Budget
              </label>
              <input
                type="number"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-32"
                placeholder="0"
              />
            </div>
            <div className="flex flex-col">
              <label className="ps-5" htmlFor="">
                Total
              </label>
              <input
                type="number"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-32"
                placeholder="0"
              />
            </div>
          </div>
          <div className="">
            <button type="button" className="bg-accent primary-action-btn">
              Add Item
            </button>
          </div>
        </div>
        <hr className="border border-stone-300" />
      </div>
      <div className="items-plan-wrapper custom-scrollbar">
        <ProductItems />
        <ProductItems />
        <ProductItems />

        <button
          type="button"
          className="bg-accent primary-action-btn rounded-xl sticky bottom-0 mb-6"
        >
          Create Plan
        </button>
      </div>
    </Layout>
  );
};

export default Create;
