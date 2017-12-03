import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

import { actions as DataActions, selectors as DataSelectors } from '../../modules/DataModule';

import Content from './Content';
import styles from './Content.css';

function mapStateToProps(state) {
    const exampleId = 0;

    return {
        data: DataSelectors.getDataById(state, exampleId),
        isLoading: DataSelectors.isDataLoading(state, exampleId)
    };
}

function mapDispatchToProps(dispatch) {
    const exampleId = 0;

    return {
        fetchData: id => dispatch(DataActions.LoadDataById(exampleId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Content, styles));