import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

import UserCard from "./UserCard";

function Cards({ usersData, setPageNumber, loading, error }) {
    const loader = useRef(null);

    const handleObserver = useCallback(
        (entries) => {
            const target = entries[0];
            if (target.isIntersecting) {
                setPageNumber((prev) => prev + 1);
            }
        },
        [setPageNumber]
    );

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 1,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return (
        <Container>
            {usersData && usersData.map((user) => <UserCard key={user.id} user={user} />)}
            {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}
            {<div ref={loader} />}
        </Container>
    );
}

export default Cards;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 10px 10px;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
