import React from "react";
import logo from "../../../logo.svg";
import cart from "./cart.png";

const Header = (props) => {
    return (
        <header>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td width="73%">
                                <img src={logo} alt="logo" width={50}></img>
                            </td>
                            <td width="30%"><input type="text" placeholder="Search.."/></td>
                            <td width="10%"><img src={cart} alt="cart" width={30}></img></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </header>
    );
};

export default Header;