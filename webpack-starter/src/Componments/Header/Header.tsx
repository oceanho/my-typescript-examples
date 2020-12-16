import React from 'react'

export interface HeaderProps {
    level: number
}

export class Header extends React.Component<HeaderProps> {
    render(){
        return <h1>{this.props.children}</h1>
    }
}