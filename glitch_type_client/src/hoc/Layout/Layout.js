import React, {Component} from 'react'
import Aux from '../Aux/Aux'
import Titlebar from '../../components/Titlebar/Titlebar'

// import classes from 'Layout.module.css'


class Layout extends Component {
    render() {
        return (
            <Aux>
                <Titlebar />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout