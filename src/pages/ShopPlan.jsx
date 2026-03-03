import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ShopPlan = () => {
  const ProductItems = () => {
    return (
      <>
        <div className="product-item">
          <div className="flex flex-col lg:flex-row gap-2 md:gap-6">
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
            <div className="flex md:hidden lg:flex flex-col flex-1">
              <label className="ps-5" htmlFor="">
                Expected Quantity
              </label>
              <input
                type="text"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-44"
                placeholder="0"
              />
            </div>
            <div className="flex md:hidden lg:flex flex-col flex-1">
              <label className="ps-5" htmlFor="">
                Actual Quantity
              </label>
              <input
                type="text"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-44"
                placeholder="0"
              />
            </div>
            <div className="hidden lg:flex flex-col flex-1">
              <label className="ps-5" htmlFor="">
                Price
              </label>
              <input
                type="text"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-36"
                placeholder="0"
              />
            </div>
            <div className="hidden lg:flex flex-col flex-1">
              <label className="ps-5" htmlFor="">
                Total
              </label>
              <input
                type="text"
                className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-36"
                placeholder="0"
              />
            </div>

            <div className="hidden md:flex gap-4 lg:hidden">
              <div className="flex flex-col flex-1">
                <label className="ps-5" htmlFor="">
                  Expected Quantity
                </label>
                <input
                  type="text"
                  className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-44"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="ps-5" htmlFor="">
                  Actual Quantity
                </label>
                <input
                  type="text"
                  className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-44"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex gap-4 lg:hidden">
              <div className="flex flex-col flex-1">
                <label className="ps-5" htmlFor="">
                  Price
                </label>
                <input
                  type="text"
                  className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-full"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className="ps-5" htmlFor="">
                  Total
                </label>
                <input
                  type="text"
                  className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-full"
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Layout>
        <div className="plan-header relative">
          <div className="title-wrapper static md:sticky top-6 main-text">
            Shop Plan
          </div>
          <div className="plan-fields-wrapper">
            <div className="flex flex-col lg:flex-row gap-6">
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
              <div className="hidden lg:flex flex-col">
                <label className="ps-5" htmlFor="">
                  Budget
                </label>
                <input
                  type="number"
                  className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-32"
                  placeholder="0"
                />
              </div>
              <div className="hidden lg:flex flex-col">
                <label className="ps-5" htmlFor="">
                  Total
                </label>
                <input
                  type="number"
                  className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-32"
                  placeholder="0"
                />
              </div>

              <div className="flex justify-between lg:hidden gap-5">
                <div className="flex flex-col">
                  <label className="ps-5" htmlFor="">
                    Budget
                  </label>
                  <input
                    type="number"
                    className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-full"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="ps-5" htmlFor="">
                    Total
                  </label>
                  <input
                    type="number"
                    className="inputfield py-3 px-5 placeholder:italic shadow-md shadow-gray-200 w-full"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-stone-300" />
        </div>
        <div className="items-plan-wrapper md:custom-scrollbar">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />

          <button
            type="button"
            className="bg-accent primary-action-btn rounded-xl fixed bottom-0 mb-6 w-5/6 md:w-40 px-6 left-0 right-0 md:left-auto md:right-auto mx-auto md:mx-0"
          >
            Complete
          </button>
        </div>
      </Layout>
    </>
  );
};

export default ShopPlan;
