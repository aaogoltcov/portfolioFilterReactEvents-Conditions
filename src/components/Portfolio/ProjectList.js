import React, {Component} from 'react';
import './ProjectList.css';

class ProjectList extends Component {
    constructor(props) {
        super(props);
    }

    generateProjectList() {
        this.imagesList = [];
        let key=0;
        for (let item of this.props.projectList) {
            this.imagesList.push(<img src={item.img} className="rounded mx-auto d-block" alt={item.category} key={key}/>);
            key++;
        }
        return this.imagesList;
    }

    render() {
        return (
            <div>
                {this.generateProjectList()}
            </div>
        );
    }
}

export default ProjectList;