import * as React from 'react';

const CategoriesBlock: React.FunctionComponent = () => {
    return (
        <div className="categories-block-container">
            <div className="category-block" style={{
                backgroundImage: "url('https://cocainemodels.com/wp-content/uploads/2018/12/40-years-jahre-become-a-model-werden-best-ager-tipps-hilfe-modeling-agency.jpg')"
            }}>
                <div className="category-overlay">
                    <p className="category-overlay-text">Перейти к списку разделов</p>
                </div>
                <div className="category-actions">
                    <p className="category-text">
                        Мужская
                    </p>
                </div>
            </div>

            <div className="category-block" style={{
                backgroundImage: "url('https://s2.funon.cc/img/orig/201805/20/5b012527089d2.jpg')"
            }}>
                <div className="category-overlay">
                    <p className="category-overlay-text">Перейти к списку разделов</p>
                </div>
                <div className="category-actions">
                    <p className="category-text">
                        Женская
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CategoriesBlock;