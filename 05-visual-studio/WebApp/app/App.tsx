﻿import * as React from 'react';
import { Layout } from './Layout';
import { Counter } from './Counter';
import './app.less';

export default class App extends React.Component<any, any> {
    render() {
        return (
            <Layout>
                <Counter />
            </Layout>
        );
    }
}