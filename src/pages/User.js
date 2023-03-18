import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import useFetch from "../hook/useFetch";
import { usersHistoryContext } from "../context/usersHistory";
import Cards from "../components/Cards";
import UserInformation from "../components/UserInformation";

function User() {
    const { pathname } = useLocation();
    const { usersHistory } = useContext(usersHistoryContext);

    const [pageNumber, setPageNumber] = useState(1);
    const [userInfo, setUserInfo] = useState();

    const { loading, error, list } = useFetch(pageNumber, 20, pathname);

    useEffect(() => {
        axios
            .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com${pathname}`)
            .then((result) => {
                setUserInfo(result.data);
                // console.log(result.data);
            });
    }, [pathname]);

    return (
        <Container>
            {userInfo && <UserInformation userInfo={userInfo} />}
            <div id="usersHistory">
                {usersHistory &&
                    usersHistory.map((user, i) => (
                        <>
                            <a href={`/user/${user.id}`}>
                                {user.prefix} {user.name} {user.lastName}
                            </a>
                            {usersHistory.length - 1 !== i ? " > " : ""}
                        </>
                    ))}
            </div>
            <h2 id="friends">Friends:</h2>
            {list && <Cards usersData={list} setPageNumber={setPageNumber} loading={loading} error={error} />}
        </Container>
    );
}

export default User;

const Container = styled.div`
    margin: 10px auto;
    padding: 10px;
    max-width: 1200px;
    border: 1px solid #cccccc;

    display: flex;
    flex-direction: column;

    #usersHistory {
        width: 100%;
        margin-top: 30px;
    }
    #friends {
        margin: 50px 0 20px;
    }
`;