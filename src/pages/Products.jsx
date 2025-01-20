import { useContext } from "react";
import { ProductContext } from "../App";
import styled from "styled-components";
import ProductCards from "../components/ProductCards";

const Wrapper = styled.div`
    max-width: 70rem;
    height: 100%;
    margin: auto;
    padding: 2rem;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
`;
const Line = styled.div`
    height: 1px;
    background-color: hsl(0, 0%, 80%);
    margin-inline: .5em;
`;
const Title = styled.h1`
    margin-top: 0;
`;

const Products = () => {
    const {products, setProducts} = useContext(ProductContext);
    return (
        <Wrapper>
            <Title>Product List</Title>
            <Line />
            <ProductCards products={products} />
        </Wrapper>
    )
}

export default Products;