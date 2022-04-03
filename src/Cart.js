import React from "react";
import "./Cart.css";
import Header from "headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


const Cart = () =>{
    return(<>
    <AnimationRevealPage>
        <Header/>
    <div class="cart-page">
            <div class="container-fluid">
                <h1 className= "cart-heading">Your Cart</h1>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="cart-page-inner">
                            <div class="table-responsive">
                                <table class="table table-bordered">

                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                            <th>Selected Date</th>
                                        </tr>
                                    </thead>
                                    <tbody class="align-middle">
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="https://aignerimage.de/etienne-aigner-ag-res.cloudinary.com/image/upload/e_trim/q_auto,w_542,h_542,c_pad,b_white,d_ph.gif,e_sharpen/bo_100px_solid_white/v1603857675/product/252011_0461-1.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div class="qty">
                                                    <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td><button><i class="fa fa-trash"></i></button></td>
                                            <td><input type="date"  name="date"/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="https://aignerimage.de/etienne-aigner-ag-res.cloudinary.com/image/upload/e_trim/q_auto,w_542,h_542,c_pad,b_white,d_ph.gif,e_sharpen/bo_100px_solid_white/v1603857675/product/252011_0461-1.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div class="qty">
                                                    <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td><button><i class="fa fa-trash"></i></button></td>
                                            <td><input type="date"  name="date"/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="https://aignerimage.de/etienne-aigner-ag-res.cloudinary.com/image/upload/e_trim/q_auto,w_542,h_542,c_pad,b_white,d_ph.gif,e_sharpen/bo_100px_solid_white/v1603857675/product/252011_0461-1.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div class="qty">
                                                    <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td><button><i class="fa fa-trash"></i></button></td>
                                            <td><input type="date"  name="date"/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="https://aignerimage.de/etienne-aigner-ag-res.cloudinary.com/image/upload/e_trim/q_auto,w_542,h_542,c_pad,b_white,d_ph.gif,e_sharpen/bo_100px_solid_white/v1603857675/product/252011_0461-1.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div class="qty">
                                                    <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td><button><i class="fa fa-trash"></i></button></td>
                                            <td><input type="date"  name="date"/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="img">
                                                    <a href="#"><img src="https://aignerimage.de/etienne-aigner-ag-res.cloudinary.com/image/upload/e_trim/q_auto,w_542,h_542,c_pad,b_white,d_ph.gif,e_sharpen/bo_100px_solid_white/v1603857675/product/252011_0461-1.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div class="qty">
                                                    <button class="btn-minus"><i class="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button class="btn-plus"><i class="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td><button><i class="fa fa-trash"></i></button></td>
                                            <td><input type="date"  name="date"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="cart-page-inner">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="coupon">
                                        <input type="text" placeholder="Coupon Code"/>
                                        <button>Apply Code</button>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="cart-summary">
                                        <div class="cart-content">
                                            <h1>Cart Summary</h1>
                                            <p>Sub Total<span>$99</span></p>
                                            <p>Shipping Cost<span>$1</span></p>
                                            <h2>Grand Total<span>$100</span></h2>
                                        </div>
                                        <div class="cart-btn">
                                            <button>Update Cart</button>
                                            <button>Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AnimationRevealPage>
    </>);
}
export default Cart;