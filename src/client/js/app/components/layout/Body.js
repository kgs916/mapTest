/** @jsx React.DOM */

define([
    'react'
    , 'layout/SlideMenu'
], function(
    React
    , SlideMenu
) {

    var Body = React.createClass({

        render: function() {
            return (
                <div>
                    <SlideMenu mapOptions={this.props.mapOptions} />
                </div>
            )
        }

    });

    return Body;

});