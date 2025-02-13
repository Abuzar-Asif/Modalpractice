import React from "react";

import { DatePicker } from "antd";
// import 'antd/dist/antd.css'
import "../Elektra/ElektraTable.css";
import {  Table } from "reactstrap";
const {RangePicker}=DatePicker;
const ElektraTable = () => {
return (
    <>
    <div className="container-fluid p-0 overflow-auto">
        <div className="row g-0">
            <p className="fontheading">Table Lists </p>
            <p className="fontheading2 ps-1 pt-1">Lists</p>
        </div>
        <div className="container elekracontainer ">
        <div className="row elektrapadingtop d-flex justify-content-center align-items-center ">
            <div className=" col-6  col-lg-3">
                <RangePicker />
            {/* <input
                type="text"
                className="form-control selectcolor eForm-control"
                name="eDateRange"
                value="02/01/2025 - 02/28/2025"
            /> */}
            </div>
            <div className="col-6 col-lg-2 py-3 py-lg-0">
            <select className="form-select selectcolor" aria-label="Default select example">
                <option selected>All Class</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
            </select>
            </div>
            <div className="col-12 col-lg-2">
            <select className="form-select selectcolor" aria-label="Default select example">
                <option selected>All Status</option>
                <option value="1">paid</option>
                <option value="2">unpaid</option>
            </select>
            </div>
            <div className="col-12 col-lg-3 pt-3 pt-lg-0">
            {" "}
            <button className="btn filterbutton  text-white">
                {" "}
                Filter
            </button>
            </div>
        </div>
    <Table responsive className="  ">
        <thead className="thead border-0">
        <tr className="align-middle ">
            <th className="theadcolor">
            Invoice  No
            </th>
            <th className="theadcolor">Student </th>
            <th className="theadcolor">
            Invoice  Title{" "}
            </th>
            <th className="theadcolor">Amount</th>
            <th className="theadcolor">Total Amount</th>
            <th className="theadcolor">Paid Amount </th>
            <th className="theadcolor">Status</th>
            <th className="theadcolor">Option </th>
        </tr>
        </thead>
        <tbody className="tbody py-5 ">
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclasssuccess badge bg-success">paid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclasssuccess badge bg-success">paid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclass badge bg-danger">unpaid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclass badge bg-danger">unpaid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclass badge bg-danger">unpaid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclass badge bg-danger">unpaid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclass badge bg-danger">unpaid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclass badge bg-danger">unpaid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        <tr style={{height:"100px"}} className="align-middle " >
            <td  > 00000001</td>
            <td>
            <p className=""> <b> Marah Petersen</b> </p>
            
            
                <p className="py-2"><b> Class :</b> One</p>
                
                <p className=""><b> Section :</b> A</p>
            </td>
            <td>Student Fee</td>
            <td>
            {" "}
            20 USD  <p className="py-2"><b>Discount: </b>  2 </p>{" "}
            <p>USD </p> {" "}
            </td>
            <td>
            {" "}
            18 USD  <p className="py-2"> <b>Created at :</b> 11-</p>{" "}
            <p>  Feb-
            2025
                </p>{" "}
            </td>
            <td>
            18 USD  <p className="py-2"> <b>  Payment date :</b> 14-</p> 
            
        <p> Nov-2024</p>  {" "}
            </td>
            <td>
            <span className="badgeclass badge bg-danger">unpaid</span>
            </td>
            <td>
            <div className="dropdown">
                <button
                className="btn buttoncolor dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item">Print Invoice</li>
                <li className="dropdown-item">Edit</li>
                <li className="dropdown-item">Delete</li>
                </ul>
            </div>
            </td>
        </tr>
        </tbody>
    </Table>
    </div>
    </div>
    {/* <td>
            <span className="badgeclass badge bg-danger">unpaid</span>
            </td> */}
    </>
);
};

export default ElektraTable;
