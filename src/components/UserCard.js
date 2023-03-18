import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { usersHistoryContext } from "../context/usersHistory";

function UserCard({ user }) {
    const { id, imageUrl, lastName, name, prefix, title } = user;

    const { setUsersHistory } = useContext(usersHistoryContext);

    const onClick = () => {
        setUsersHistory((users) => [...users, user]);
        window.scrollTo(0, 0);
    };

    return (
        <Container as={Link} to={`/user/${id}`} onClick={onClick}>
            <img src={`${imageUrl}?v=${id}`} alt={name} />
            <div>
                <h3>
                    {prefix} {name} {lastName}
                </h3>
                <p>{title}</p>
            </div>
        </Container>
    );
}

export default UserCard;

const Container = styled.div`
    width: 100%;
    text-decoration: none;
    border: 1px solid #cccccc;
    cursor: pointer;
    background: rgb(231, 231, 231);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 250px;

    img {
        width: 100%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    div {
        width: 100%;
        padding: 10px 10px;
        color: black;
    }
`;
