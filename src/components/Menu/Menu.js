import React from 'react'

export default function Menu () {
  return (
    <div className="menu-wrapper">
            <div className="menu-head">
                <p>Burgerler</p>
            </div>
        <div className="menu-info-container">
            <div className="left-item">
            <div className="add-block">
                <div className="count-item">
                    <input type="number" />
                </div>
                <div className="add-item">+</div>
            </div>
        <div className="menu-content-block">
                <p className="menu-name">
                    Classic American Cheeseburger
                </p>
                <p className="menu-description">
                    Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)
                </p>
        </div>
        </div>
        <div className="menu-price-block">
            <span>17,50TL</span>
        </div>
    </div>
    <div className="menu-info-container">
        <div className="left-item">
            <div className="add-block">
                <div className="count-item">
                    <input type="number" />
                </div>
                <div className="add-item">+</div>
        </div>
        <div className="menu-content-block">
                <p className="menu-name">
                    Classic American Cheeseburger
                </p>
                <p className="menu-description">
                    Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)
                </p>
        </div>
        </div>
        <div className="menu-price-block">
            <span>17,50TL</span>
        </div>
    </div>
    <div className="menu-info-container">
        <div className="left-item">
            <div className="add-block">
                <div className="count-item">
                    <input type="number" />
                </div>
                <div className="add-item">
                    +
                </div>
        </div>
        <div className="menu-content-block">
                <p className="menu-name">
                    Classic American Cheeseburger
                </p>
                <p className="menu-description">
                    Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)
                </p>
        </div>
        </div>
        <div className="menu-price-block">
            <span>17,50TL</span>
        </div>
    </div>
</div>
  )
}
