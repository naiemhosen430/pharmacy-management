"use client";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import AddToCardPopUp from "../CommonComponents/AddToCardPopUp";

export default function Menu() {
  const [cardPopUp, setCardPopUp] = useState(false);

  // hundle onclick
  const AddToCardPopUpHundler = () => {
    if (cardPopUp === true) {
      setCardPopUp(false);
    } else {
      setCardPopUp(true);
    }
  };
  return (
    <>
      {cardPopUp && (
        <AddToCardPopUp AddToCardPopUpHundler={AddToCardPopUpHundler} />
      )}
      <div className="p-4 px-4 flex justify-center align-center shadow-lg">
        <h1 className="font-bold w-3/12 text-2xl">Pharmacy Management</h1>

        <ul className="flex justify-end w-8/12 space-x-8 font-bold text-lg align-middle">
          <li className="py-1">
            <FaSearch />
          </li>
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li className="py-1 pl-5">
            <MdLocalGroceryStore
              onClick={AddToCardPopUpHundler}
              className="cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
