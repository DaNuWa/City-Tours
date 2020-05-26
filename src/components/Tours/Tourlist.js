import React, { Component } from 'react'
import Tour from './Tour'
import  './Tourlist.scss';
import {tourData} from '../../../src/tourData';

 class Tourlist extends Component {
     state={
        data:tourData
     }
     tourRemove=(id)=>
     {
        const olddatas=this.state.data;
        const removed=olddatas.filter(data=>data.id!==id);
        this.setState({data:removed})
     }
    render() {
        const datas=this.state.data;
        console.log(datas)
        const info=datas.map(i=>
            {
              return <Tour  key={i.id} des={i} remove={this.tourRemove}/>
            })
        return (
            <div className="tourlist">
               {info}
            </div>
        )
    }
}

export default Tourlist;
