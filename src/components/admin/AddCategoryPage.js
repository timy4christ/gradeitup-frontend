import React, { useState } from "react";
import "./AdminAddCategoryPage.css";
import { Button, Form } from "react-bootstrap";
import FormContainer from "./FormContainer";

import { useNavigate } from "react-router-dom";

const AddCategoryPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {

  };

  return (
    <div className="">
      <div className="adminCategoriesPage__content">
        <FormContainer>
          <h2>Add Category</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="my-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                style={{ textAlign: "top" }}
                as="textarea"
                rows="5"
                type="text"
                placeholder="Enter Category Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>

            <Button
              className="my-5 adminCategoriesPage__content--button"
              type="submit"
              variant="primary"
            >
              Add
            </Button>
          </Form>
        </FormContainer>
      </div>
    </div>
  );
};

export default AddCategoryPage;
