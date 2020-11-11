import React, { Component } from "react";
import { Button, Modal, Form,Table} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";
import Header from "./Header";

class AddProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      studentId: "",
      firstName: "",
      lastName: "",
      address:'',
      enrollmentNo:'',
      flag: false,
      search: "",
    };
  }

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({
      show: true,
    });
  };

  handleClose = (e) => {
    e.preventDefault();
    this.setState({
      show: false,
    });
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  searchHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onClickHandler(e) {
    e.preventDefault();

    const data = {
      studentId: uuidv4(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      enrollmentNo:this.state.enrollmentNo,
    };
    this.props.dispatch({
      type: "ADD_STUDENT",
      payload: data,
    });

    this.setState({
      firstName: "",
      lastName: "",
      address: "",
      enrollmentNo:"",
      show: false,
    });
  }

  onEdit = (e, list) => {
    e.preventDefault();
    //console.log(list);
    this.props.dispatch({
      type: "EDIT_LIST",
      payload: list,
    });

    this.setState({
      show: true,
      firstName: list.firstName,
      lastName: list.lastName,
      address: list.address,
      enrollmentNo:list.enrollmentNo,
      flag: true,
    });
  };

  onUpdate = (e) => {
    e.preventDefault();

    this.props.dispatch({
      type: "UPDATE_STUDENT",
      payload: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        enrollmentNo: this.state.enrollmentNo,
      },
    });

    this.setState({
      show: false,
      flag: false,
      firstName: "",
      lastName: "",
      address: "",
      enrollmentNo:"",
    });
  };

  onDelete = (e, i) => {
    e.preventDefault();
    //console.log(i);
    this.props.dispatch({
      type: "DELETE_STUDENT",
      id: i,
    });
  };

  onSearch = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: "SEARCH_STUDENT",
      value: this.state.search,
    });
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <form>
          <input
            className="input-search-style"
            type="text"
            placeholder="Enter First Name..."
            value={this.state.search}
            onChange={this.searchHandler}
          />
          <button
            className="btn-search-style"
            onClick={(e) => {
              this.onSearch(e);
            }}
          >
            Search
          </button>
        </form>
        <br />
        <Button variant="light" className="btn-style" onClick={this.handleOpen}>
          Add Students
        </Button>
        <Modal show={this.state.show} className="modal-style">
          <Modal.Dialog className="modal-dialog-style">
            <Modal.Header>
              <Modal.Title className="modal-title-style">
                {this.state.flag ? "Update Student" : "Add Student"}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Control
                    className="input-modal-style"
                    type="text"
                    placeholder=" Enter First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="input-modal-style"
                    type="text"
                    placeholder=" Enter Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="input-modal-style"
                    type="text"
                    placeholder=" Enter Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="input-modal-style"
                    type="number"
                    placeholder=" Enter Enrollment No."
                    name="enrollmentNo"
                    value={this.state.enrollmentNo}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              {this.state.flag ? (
                <Button
                  className="modal-btn-style"
                  variant="outline-success"
                  onClick={(e) => {
                    this.onUpdate(e);
                  }}
                  disabled={
                      !this.state.firstName ||
                      !this.state.lastName ||
                      !this.state.address || 
                      !this.state.enrollmentNo
                  }
                >
                  Update
                </Button>
              ) : (
                <Button
                  className="modal-btn-style"
                  variant="outline-success"
                  onClick={(e) => {
                    this.onClickHandler(e);
                  }}
                  disabled={
                    !this.state.firstName ||
                    !this.state.lastName ||
                    !this.state.address || 
                    !this.state.enrollmentNo
                }
                >
                  Add
                </Button>
              )}

              <Button
                variant="outline-danger"
                onClick={(e) => {
                  this.handleClose(e);
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
        <>
        <Table bordered className="table-style" >
          <thead>
            <tr className="table-tr-style">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Enrollment No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.props.lists.map((list, i) => (
            <tr key={list.studentId} className="tr-style">
              <td>{list.firstName}</td>
              <td>{list.lastName}</td>
              <td>{list.address}</td>
              <td>{list.enrollmentNo}</td>
              <td>
              <Button
                  variant="outline-warning"
                  className="list-btn-style"
                  onClick={(e) => {
                    this.onEdit(e, list, i);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={(e) => {
                    this.onDelete(e, i);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
        </>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);

