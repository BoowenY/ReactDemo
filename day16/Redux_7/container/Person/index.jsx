import { Component } from "react"; 
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import {createAddPerson} from '../../redux/actions/person'
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = {id: nanoid(), name, age}
        this.props.jiayiren(personObj);
        this.nameNode.value = '';
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h2>Person Component</h2>
                <h2>the count over is {this.props.he}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="Input Name"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="Input Age"/>
                <button onClick={this.addPerson}>add</button>
                <ul>
                    {
                        this.props.yiduiren.map( p => {
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect (
    state => ({yiduiren: state.ren, he: state.he}), 
    {
        jiayiren: createAddPerson
    }
)(Person)