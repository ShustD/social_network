import React from 'react';
import p from './Info.module.css'

export class InfoStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }
    render() {
        return (
            <div>
                <div className={p.info__about}>

                    <div className={p.info__tittle}>Status</div>
                    {!this.state.editMode &&
                        <div onDoubleClick={this.activeEditMode}
                            className={p.info__text}>
                            {this.props.status || 'put your st'}</div>}
                    {this.state.editMode &&
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode}
                            value={this.state.status} className={p.info__text} />}


                </div>
            </div>
        )
    }
}
