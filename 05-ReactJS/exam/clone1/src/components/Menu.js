/** 패키지 참조  */
import React from "react";
/** 이미지 참조 */
import tablesetting from "../img/tablesetting.jpg"

const Menu = () => {
    return (
        <div className="main_menu">
            <div className="main_menu-content">
                <div className="main_text down">
                    <h1>Our Menu</h1>
                    <br />
                    <h4>Bread Basket</h4>
                    <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                    <br />
                    <h4>Honey Almond Granola with Fruits</h4>
                    <p>
                    Natural cereal of honey toasted oats, raisins, almonds and dates
                    7.00
                    </p>
                    <br />
                    <h4>Belgian Waffle</h4>
                    <p>Vanilla flavored batter with malted flour 7.50</p>
                    <br />
                    <h4>Scrambled eggs</h4>
                    <p>
                    Scrambled eggs, roasted red pepper and garlic, with green onions
                    7.50
                    </p>
                    <br />
                    <h4>Blueberry Pancakes</h4>
                    <p>With syrup, butter and lots of berries 8.50</p>
                    <br />
                </div>
            </div>
            <div className="main_img">
                <img src={tablesetting} alt="Table Setting" />
            </div>
        </div>
    )
}

export default Menu;