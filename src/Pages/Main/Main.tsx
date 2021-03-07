import * as React from 'react';
import { connect } from 'react-redux';
import { IStore, IReducers } from 'Utils/Reducers/actionTypes';
import { updateStore } from 'Utils/Reducers/storeReducer';
import Header from 'Components/Header/Header';
import ContentHeader from 'Components/Content Header/ContentHeader';
import CategoriesBlocks from 'Components/Categories Blocks/CategoriesBlocks';

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