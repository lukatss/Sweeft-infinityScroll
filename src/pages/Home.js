import { useState } from "react";
import styled from "styled-components";

import Cards from "../components/Cards";
import useFetch from "../hook/useFetch";

function Home() {
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, error, list } = useFetch(pageNumber, 20);

    return (
        <Container>
            {list && <Cards usersData={list} setPageNumber={setPageNumber} loading={loading} error={error} />}
        </Container>
    );
}

export default Home;

const Container = styled.div`
    max-width: 1200px;
    padding: 10px;
    margin: auto;
`;
