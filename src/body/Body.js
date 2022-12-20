import React, { useState } from "react";
import "./body.css";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { Input } from "@mui/material";

function Body() {
  const [state, setState] = useState("");
  const [input, setInput] = useState("");
  const [unfocus, setUnfocus] = useState(false);
  const columns = [
    {
      field: "ChgCode",
      headerName: "ChgCode",
      width: 200,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Customer Name",
      headerName: "Fee Account",
      width: 200,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Currency",
      headerName: "Currency",
      width: 200,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Tenor",
      headerName: "Tenor",
      type: "number",
      width: 200,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Fee Amount Per Book",
      headerName: "Effect Date",
      type: "number",
      width: 200,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    

    {
      field: "Rate",
      headerName: "Amt Granted",
      type: "number",
      width: 250,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
  ];
  function handleBlur() {
    axios
      .post("http://localhost:7408/get-account-details", input)
      .then((res) => {
        console.log(res.data)
        if (res.data.length !== 0) {
          // setUnfocus(false);
          setState(res.data);
        } else {
          // setUnfocus(true);
          Swal.fire("Invalid Account Number", "", "error");
          setState("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const rows = [];
  function handlekeydown(e) {
    if (e.key === "Enter") handleBlur();
    //   e.preventDefault();
    //   // setLoader(true);
    //   axios
    //     .post("http://localhost:7408/get-account-details", {
    //       accountNumber: input,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       if (res.data.length !== 0) {
    //         console.log(
    //           "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
    //         );
    //         setUnfocus(false);
    //         setState(res.data);

    //         // setLoader(false);
    //       } else {
    //         // setLoader(false);
    //         setUnfocus(true);

    //         Swal.fire(
    //           "Invalid Account Number, please check and try again",
    //           "",
    //           "error"
    //         );
    //         setState("");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  }
  function handleChange(e) {
    setInput({ [e.target.name]: e.target.value });
  }
  return (
    <div className="Main_Body">
      <div className="body_1">
        <div className="Req_input">
          <label htmlFor="Name" style={{ fontSize: "20px", marginLeft: "67px" }}>
            Request ID:
          </label>
          <input
          value={state && state[0]["ACR_INT"]}
            type="text"
            id="Name"
            name="Name"
            placeholder="Jane Doe"
            disabled
            
         
            style={{
              width: "280px",
              height: "50px",
              marginTop: "20px",
              borderRadius: "5px",
              marginLeft: "23px",
            }}
          />
        </div>
      </div>

      <br />

      <div className="body_2">
        <div className="Textboxes">
          <div className="TB1">
            <form action="/action_page.php">
              <label htmlFor="Name" style={{ fontSize: "20px" }}>
                Account Number:
              </label>
              <input
                name="accountNumber"
                onChange={handleChange}
                onKeyDown={handlekeydown}
                type="text"
                id="Name"
                placeholder="Jane Doe"
                style={{
                  width: "280px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "33px",
                  marginTop: "40px",
                }}
              />
              <></>
              <input
                value={state && state[0]["ACCOUNT_DESCRP"]}
                type="text"
                id="lname"
                name="lname"
                disabled
                size="66"
                style={{
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                  marginTop: "40px",
                }}
              ></input>
            </form>
          </div>
          <div className="TB2">
            <form action="/action_page.php">
              <label htmlFor="Name" style={{ fontSize: "20px" }}>
                Product:
              </label>
              <input
               value={state && state[0]["PROD_CODE"]}
                type="text"
                id="lname"
                name="lname"
                disabled
                style={{
                  width: "280px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "112px",
                }}
              ></input>
              <label
                htmlFor="Name"
                style={{ fontSize: "20px", marginLeft: "148px" }}
              >
                Date Opened:
              </label>
             
              <input
               value={state && state[0]["CUST_NO"]}
                type="text"
                id="lname"
                name="lname"
                disabled
                style={{
                  width: "282px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "30px",
                }}
              ></input>
            </form>
          </div>
          <div className="TB3">
            <form action="/action_page.php">
              <label htmlFor="Name" style={{ fontSize: "20px" }}>
                Currency:
              </label>
              
              <input
              value={state && state[0]["Currency"]}
                type="text"
                id="lname"
                name="lname"
                disabled
                style={{
                  width: "280px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "102px",
                }}
              ></input>
              <label
                htmlFor="Name"
                style={{ fontSize: "20px", marginLeft: "87px" }}
              >
                Date of Last Activity:
              </label>
              <input
              value={state && state[0]["ACR_INT"]}
              
                type="text"
                id="lname"
                name="lname"
                disabled
                style={{
                  width: "285px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "32px",
                }}
              ></input>
            </form>
          </div>
          <div className="TB4">
            <form action="/action_page.php">
              <label htmlFor="Name" style={{ fontSize: "20px" }}>
                Cheque Number:
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Jane Doe"
                style={{
                  width: "280px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "34px",
                }}
              />
              <label
                htmlFor="Name"
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                  marginLeft: "191px",
                }}
              >
                Amount:
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Jane Doe"
                style={{
                  width: "286px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "32px",
                }}
              />{" "}
            </form>
          </div>
          <div className="TB5">
            <label htmlFor="Name" style={{ fontSize: "20px" }}>
              Requested By:
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Jane Doe"
              size="103"
              style={{
                height: "50px",
                marginTop: "15px",
                borderRadius: "5px",
                marginLeft: "61px",
              }}
            />
          </div>
          <div className="TB6">
            <form action="/action_page.php">
              <label htmlFor="Name" style={{ fontSize: "20px" }}>
                Document Number:
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                placeholder="Jane Doe"
                style={{
                  width: "280px",
                  height: "50px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                }}
              />

              <a href="https://freecodecamp.org">View Document</a>
            </form>
          </div>
          <div className="TB7">
            <label htmlFor="Name" style={{ fontSize: "20px" }}>
              Comments:
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Jane Doe"
              size="103"
              style={{
                height: "50px",
                marginTop: "15px",
                borderRadius: "5px",
                marginLeft: "82px",
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="body_3">
        <div>
          {/**Data Table */}
          <Box
            sx={{
              height: "175px",
              width: "auto",

              "& .super-app-theme--header": {
                backgroundColor: "rgb(85, 130, 192)",
                color: "white",
                fontStyle: "italic",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Body;
