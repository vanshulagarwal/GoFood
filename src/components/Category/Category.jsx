import { useState } from 'react';
import './Category.scss';
import plate from '../../assets/plate.png';
import { IoArrowForward } from "react-icons/io5";
import fetchDataHook from './fetchDataHook';
import Loader from '../Loader/Loader';

const allCategories = ['breakfast', 'seafood', 'chicken', 'pasta', 'dessert', 'miscellaneous']

const Category = () => {
    const [currCateg, setCurrCateg] = useState('chicken');

    const { data, loading, error } = fetchDataHook(currCateg);

    const [visibleReviews, setVisibleReviews] = useState(6);


    return (
        <div className="category">
            <h4 className='smallheading'>Shop by Category</h4>
            <h2 className='bigheading'>Top Category Of Organic Food</h2>

            <div className="categorybtns">
                {allCategories.map((item, index) => (
                    <button key={index} className={currCateg === item ? 'active' : ''} onClick={() => setCurrCateg(item)}>
                        {item.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className="foodgrid">
                {loading
                    ? <Loader />
                    : error
                        ? "Something went wrong!"
                        : data.slice(0, visibleReviews).map((item, index) => (
                            <div className="food" key={index}>
                                <img src={item.strMealThumb} alt="" />
                                <div className="foodDetails">
                                    <div className="top">
                                        <span className="foodname">{item.strMeal}</span>
                                        <span className="foodprice">$8.45</span>
                                    </div>
                                    <hr />
                                    <div className="bottom">
                                        <span className='foodDesc'>lorem ipsum dolor sit amet </span>
                                        <span className='shopNow'>SHOP NOW<IoArrowForward /></span>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
            {
                !loading && !error && data && visibleReviews < data.length
                    ? <p className="showMore" onClick={() => setVisibleReviews(prev => prev + 6)}>Show More...</p>
                    : ""
            }
        </div>
    )
}

export default Category;