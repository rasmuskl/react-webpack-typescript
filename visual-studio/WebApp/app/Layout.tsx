import * as React from 'react';
import {Counter} from './Counter';

export class Layout extends React.Component<any, any> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}