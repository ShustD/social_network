import React from 'react';
import p from './Info.module.css'

export class InfoStatus extends React.Component {
    state = {
        editMode: false
    }
    activeEditMode () {
        this.setState  ({
            editMode: true})
    }

    deactiveEditMode () {
        this.setState  ({
            editMode: false})
    }
    render() {
        return (
            <div>
                <div className={p.info__about}>
                    <div className={p.info__tittle}>About me</div>
                    {!this.state.editMode &&  
                        <div onDoubleClick={this.activeEditMode.bind(this)} 
                        className={p.info__text}>
                        {this.props.profile.aboutMe}</div>}
                    
                    {this.state.editMode && 
                     <input onDoubleClick={this.deactiveEditMode.bind(this)} className={p.info__text} type="text" />}
                   
                </div>
            </div>
        )
    }
}
