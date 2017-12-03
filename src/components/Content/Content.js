import React from 'react';

class Content extends React.Component {
    componentWillMount() {
        const exampleId = 0;
        this.props.fetchData(exampleId);
    }

    render() {
        return (
            <section styleName="content">
                {
                    this.props.isLoading &&
                    <div>Loading...</div>
                }
                {
                    !this.props.isLoading &&
                    this.props.data &&
                    <div>{this.props.data}</div>
                }
                {
                    !this.props.isLoading &&
                    !this.props.data &&
                    <div>There is no data available</div>
                }
            </section>
        );
    }
}

export default Content;