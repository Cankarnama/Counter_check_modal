import React from "react";
import Body from "../body/Body";
import Button_option from "../button/Button_option";
import {
  AiFillFileAdd,
  AiOutlineEye,
  AiFillQuestionCircle,
} from "react-icons/ai";

import { RxCross1 } from "react-icons/rx";

import { TiTick } from "react-icons/ti";

import { BsFileExcel } from "react-icons/bs";

import { FcCancel } from "react-icons/fc";

import { ImSwitch } from "react-icons/im";
import { TbLetterA } from "react-icons/tb";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="Nav">
        <h1
          style={{
            padding: 0,
            margin: 0,
            fontSize: 25,
            marginTop: 8,
            color: "whitesmoke",
          }}
        >
          Counter check Requisite
        </h1>

        <div className="BottomNav">
          <div className="PbuttonNav">
            <div style={{ width: "100%", display: "flex" }}>
              <Button_option text="New" image={<AiFillFileAdd />} />
              <Button_option text="Delete" image={<RxCross1 />} />
              <Button_option text="Authorise" image={<TbLetterA />} />
              <Button_option text="Views" image={<AiOutlineEye />} />
              <Button_option text="Ok" image={<TiTick />} />
              <Button_option text="Cancel" image={<BsFileExcel />} />
              <Button_option text="Reject" image={<FcCancel />} />
              <Button_option text="Help" image={<AiFillQuestionCircle />} />

              <Button_option text="Exit" image={<ImSwitch />} />
            </div>
          </div>
        </div>

        {/* <div>
          <Body /> 
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
