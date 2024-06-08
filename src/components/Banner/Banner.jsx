import './Banner.scss';
import { IoArrowForward } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import plateImg from "../../assets/plate.png";
import kiwi from "../../assets/kiwi.png";

const Banner = () => {
    return (
        <div className="banner">
            <div className="wrapper">
                <div className="content">
                    <p className="supertext">Discount up to 20%</p>
                    <p className="text">Buy Fresh And Organic Grocery Food <span>
                        <img src={kiwi} alt="" />
                    </span></p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ut reprehenderit obcaecati numquam culpa dolore!</p>
                    <div className="bottom">
                        <button className='shopNow'>SHOP NOW <IoArrowForward /></button>
                        <div>
                            <div className="number">
                                <span>35k</span>
                                <GoPlus />
                            </div>
                            <div className="belownumber">Users</div>
                        </div>
                        <div>
                            <div className="number">
                                <span>18k</span>
                                <GoPlus />
                            </div>
                            <div className="belownumber">Products</div>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <img src={plateImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner;