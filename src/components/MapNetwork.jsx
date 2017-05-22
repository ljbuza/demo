import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import Child from './Child.jsx';

export default class MapNetwork extends Component {
  handleChildClick(childData, event) {
    alert(
      'The Child button data is: ' +
        childData.childText +
        ' - ' +
        childData.childNumber,
    );
    alert('The Child HTML is: ' + event.target.outerHTML);
  }
  render() {
    return (
      <div>
        {/* {this.props.childrenData.map(child => (
          <Child
            key={child.childNumber}
            text={child.childText}
            onClick={e => this.handleChildClick(child, e)}
          />
        ))}*/}
        <Image src="/img/network_view.png" />
      </div>
    );
  }
}
