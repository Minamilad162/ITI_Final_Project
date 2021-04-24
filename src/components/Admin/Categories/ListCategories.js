import React from 'react';

import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import AddCategories from './AddCategories';

class ListCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categories: [], addCategoryShow: false, editCategoryShow: false };
    }
   
    componentDidMount() {
        this.refreshList();
    }
    refreshList() {
        fetch(`http://hazemmansour.pythonanywhere.com/api/categorylist`, { method: 'GET', ContentType: 'application/json' })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ categories: data });
              
            });
    }

    
    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { categories, name, code } = this.state;
        let addCategoryClose = () => this.setState({ addCategoryShow: false });
        return (
            <div>
                <Table className="mt-4" striped="true" bordered="true" hover="true" size="sm" responsive="md" variant="dark">
                    <thead>
                        <tr>
                            <th>Category Id</th>
                            <th>Category name</th>
                            <th>Category code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>{category.code}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant="primary" onClick={() => this.setState({ addCategoryShow: true })}>
                        Add Category
                    </Button>
                    <AddCategories show={this.state.addCategoryShow} onHide={addCategoryClose} key={this.state.key} name={name} code={code} />
                </ButtonToolbar>
            </div>
        );
    }
}

export default ListCategories;
