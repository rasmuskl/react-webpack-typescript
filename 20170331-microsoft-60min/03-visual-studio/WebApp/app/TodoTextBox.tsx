import * as React from 'react';

interface TodoTextBoxProps {
    onSubmit(title: string): void;
}

interface TodoTextBoxState {
    value: string;
}

export class TodoTextBox extends React.Component<TodoTextBoxProps, TodoTextBoxState> {
    constructor() {
        super();
        this.state = { value: '' };
    }

    onKeyDown(event) {

        if (this.state.value === '') {
            return;
        }

        const enterKeyCode = 13;
        if (event.keyCode === enterKeyCode) {
            this.props.onSubmit(this.state.value);
            this.setState({ value: '' });
        }
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onKeyDown={this.onKeyDown.bind(this)} onChange={this.onChange.bind(this)} />
            </div>
        );
    }
}