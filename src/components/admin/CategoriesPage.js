import React, { useState } from "react";
import "./AdminCategoriesPage.css";
import { useNavigate } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import Message from "./Message";
import { SideNav } from "./SideNav";


const CategoriesPage = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([{
        catId: 1,
        title: 'Test Category',
        description: 'test description'
    }]);

    const categoryClickHandler = (catId) => {
    };

    const addNewCategoryHandler = () => {
        navigate('/admin/add-category')
    };

    const updateCategoryHandler = (event, category) => {
        event.stopPropagation();
    };

    const deleteCategoryHandler = (event, category) => {

    };

    return (

        <>
            <div className="row ">
                <div className="col-lg-2 sidebar"><SideNav></SideNav></div>
                <div className="col-lg-10"><div className="">

                    <div className="adminCategoriesPage__content">
                        <h2>Categories</h2>

                        {
                            categories.length === 0 ? (
                                <Message>
                                    No categories are present. Try adding some categories.
                                </Message>
                            ) :
                                categories.map((cat, index) => {
                                    return (
                                        <ListGroup
                                            className="adminCategoriesPage__content--categoriesList"
                                            key={index}
                                        >
                                            <ListGroup.Item
                                                style={{ borderWidth: "0px" }}
                                                className="d-flex"
                                                onClick={() => categoryClickHandler(cat.catId)}
                                            >
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">{cat.title}</div>
                                                    {cat.description}
                                                </div>

                                                <div
                                                    style={{
                                                        display: "flex",
                                                        height: "90%",
                                                        margin: "auto 2px",
                                                    }}
                                                >
                                                    <div
                                                        onClick={(event) => updateCategoryHandler(event, cat)}
                                                        style={{
                                                            margin: "2px 8px",
                                                            textAlign: "center",
                                                            color: "rgb(68 177 49)",
                                                            fontWeight: "500",
                                                            cursor: "pointer"
                                                        }}
                                                    >{`Update`}</div>

                                                    <div
                                                        onClick={(event) => deleteCategoryHandler(event, cat)}
                                                        style={{
                                                            margin: "2px 8px",
                                                            textAlign: "center",
                                                            color: "red",
                                                            fontWeight: "500",
                                                            cursor: "pointer"
                                                        }}
                                                    >{`Delete`}</div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    );
                                })
                        }
                        <Button
                            className="my-5 adminCategoriesPage__content--button"
                            type="submit"
                            variant="primary"
                            onClick={addNewCategoryHandler}
                        >
                            Add Category
                        </Button>
                    </div>
                </div></div>
            </div>
        </>



    );
};

export default CategoriesPage;
