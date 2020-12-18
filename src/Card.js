import React from 'react';

class Card extends React.Component {

    render () {
        const testProfile = this.props;
        return (
            <div className="row padding">
                <img src={testProfile.avatar_url} className="avatar-img"/>
                <div className="col padding">
                    <div className="subHeader">{testProfile.name}</div>
                    <div className="subText">{testProfile.company}</div>
                </div>
            </div>
        )
    }
}
export default Card;