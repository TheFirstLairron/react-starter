import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';

import dataModule from '../../modules/DataModule';
import Content from './Content';
import styles from './Content.css';

let { actions, selectors } = dataModule;

function mapStateToProps(state) {
    const exampleId = 0;

    return {
        data: selectors.getDataById(state, exampleId),
        isLoading: selectors.isDataLoading(state, exampleId)
    };
}

function mapDispatchToProps(dispatch) {
    const exampleId = 0;

    return {
        fetchData: id => dispatch(actions.loadDataById(exampleId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Content, styles));