"use client";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";

const handleSubboxClick = (event) => {
  event.stopPropagation();
};

export default function AddToCardPopUp({ AddToCardPopUpHundler }) {
  const [cardProductDetailsBox, setCardProductDetailsBox] = useState(false);

  const cardProductDetailsHundler = () => {
    if (cardProductDetailsBox === true) {
      setCardProductDetailsBox(false);
    } else {
      setCardProductDetailsBox(true);
    }
  };
  return (
    <>
      <div
        onClick={AddToCardPopUpHundler}
        className="fixed top-0 left-0 h-screen w-screen bg-gradient-to-l flex justify-around from-blue-900"
      >
        {/* left side  */}
        <div className="w-8/12 py-10">
          {cardProductDetailsBox && (
            <div
              className="w-10/12 m-auto bg-white p-5 rounded-lg shadow-2xl"
              onClick={handleSubboxClick}
              data-aos="fade-right"
            >
              <div className="border-b-4 p-2" data-aos="fade-up">
                <h1 className="text-4xl font-bold">Napa Extra 500</h1>
              </div>

              <div className="flex">
                <div className="w-4/12 p-2">
                  <img
                    className="w-full"
                    data-aos="fade-right"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfB2FC8jCW52mrlHP6xJWst3LgsB9ijlfjkA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="w-8/12 p-2" data-aos="fade-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur quibusdam neque excepturi exercitationem adipisci
                  illo ipsa temporibus vero nostrum debitis, error itaque eos
                  qui quo mollitia, explicabo similique doloribus ea?
                </div>
              </div>

              {/* order form  */}
              <div className="p-2" data-aos="fade-up">
                <form action="" method="post">
                  <div className="py-2">
                    <input
                      type="text"
                      name="full-name"
                      placeholder="Enter your name"
                      className="w-full p-2 px-4 border-2 rounded-md"
                      required
                    />
                  </div>

                  <div className="py-2">
                    <input
                      type="number"
                      name="full-name"
                      placeholder="Enter your phone number"
                      className="w-full p-2 px-4 border-2 rounded-md"
                      required
                    />
                  </div>

                  <div className="py-2">
                    <input
                      type="email"
                      name="full-name"
                      placeholder="Enter your email address"
                      className="w-full p-2 px-4 border-2 rounded-md"
                      required
                    />
                  </div>

                  <div className="py-2">
                    <button
                      type="submit"
                      className="w-full p-2 px-4 border-2 rounded-md bg-slate-900 text-white font-bold"
                    >
                      Make Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* right side  */}
        <div
          onClick={handleSubboxClick}
          className="w-4/12 bg-white p-5 rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          <div className="text-2xl border-b-2 font-bold flex justify-between ">
            <h1>MY Card Items</h1>
            <IoCloseSharp
              onClick={AddToCardPopUpHundler}
              className="text-2xl cursor-pointer"
            />
          </div>

          <div className="py-5">
            <div
              onClick={cardProductDetailsHundler}
              className="flex align-center card-product overflow-hidden cursor-pointer hover:bg-slate-200 hover:shadow-xl rounded-xl"
              data-aos="fade-up"
            >
              <div className="bg-black"></div>
              <img
                className="h-14 w-20 inline-block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfB2FC8jCW52mrlHP6xJWst3LgsB9ijlfjkA&usqp=CAU"
                alt=""
              />
              <h1 className="px-5 py-2 w-10/12 card-product-heading text-xl font-bold">
                Napa Extra 500
              </h1>

              <div
                className="card-product-action-box space-x-5 w-10/12 text-2xl text-right py-2 px-10"
                data-aos="fade-left"
              >
                <IoEyeSharp
                  onClick={cardProductDetailsHundler}
                  className="inline-block"
                />
                <MdDelete className="inline-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
