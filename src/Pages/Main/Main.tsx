import * as React from 'react';
import { connect } from 'react-redux';
import { IStore, IReducers } from 'Utils/Reducers/actionTypes';
import { updateStore } from 'Utils/Reducers/storeReducer';
import Header from 'Components/Header/Header';
import ContentHeader from 'Components/Content Header/ContentHeader';
import CategoriesBlocks from 'Components/Categories Blocks/CategoriesBlocks';
import Slider from 'Components/Slider/Slider';

interface IMainProps {
    updateStore: typeof updateStore,
    store: IStore
}

const Main: React.FunctionComponent<IMainProps> = ({ store, updateStore }) => {

    return (
        <div className="main-page">
            <div className="main-page-header-block">
                <Header />
            </div>
            <div className="main-page-categories-block">
                <ContentHeader
                    align='center'
                    title='Разделы'
                />
                <CategoriesBlocks />
            </div>

            <div className="main-page-top-shops-block">
                <ContentHeader
                    align='center'
                    title='Популярные магазины'
                />
                
                <Slider
                    autoplay={true}
                    type="image"
                    images={[
                    {
                        uri: "https://i.pinimg.com/originals/5d/2f/94/5d2f9440f4c7472cc2a7fb5a2e9d011d.jpg",
                    },
                    {
                        uri: "https://static.toiimg.com/photo/72975551.cms",
                    },
                    {
                        uri: "https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg",
                    },
                    {
                        uri: "https://static.toiimg.com/photo/72975551.cms",
                    },
                    {
                        uri: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                    },
                    {
                        uri: "https://static.toiimg.com/photo/72975551.cms",
                    }]}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state: IReducers) => {
    const { store } = state;
    return { store };
}

const mapDispatchToProps = {
    updateStore
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);