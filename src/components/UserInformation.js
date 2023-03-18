import styled from "styled-components";

function UserInformation({ userInfo }) {
    const { imageUrl, prefix, name, lastName, title, email, ip, jobArea, jobType } = userInfo;
    const { city, country, state, streetAddress, zipCode } = userInfo.address;
    return (
        <Container>
            <img src={imageUrl} alt={name} />
            <fieldset id="fieldset1">
                <legend>Info</legend>
                <div>
                    <h3>
                        {prefix} {name} {lastName}
                    </h3>
                    <p>{title}</p>
                </div>
                <div>
                    <p>
                        <span>Email:</span> {email}
                    </p>
                    <p>
                        <span>Ip Address:</span> {ip}
                    </p>
                    <p>
                        <span>Job Area:</span> {jobArea}
                    </p>
                    <p>
                        <span>Job Type:</span> {jobType}
                    </p>
                </div>
            </fieldset>
            <fieldset id="fieldset2">
                <legend>Address</legend>
                <h4>
                    {userInfo.company.name} {userInfo.company.suffix}{" "}
                </h4>
                <p>
                    <span>City:</span> {city}
                </p>
                <p>
                    <span>Country:</span> {country}
                </p>
                <p>
                    <span>State:</span> {state}
                </p>
                <p>
                    <span>Street Address:</span> {streetAddress}
                </p>
                <p>
                    <span>ZIP:</span> {zipCode}
                </p>
            </fieldset>
        </Container>
    );
}

export default UserInformation;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
        width: 265px;
        height: 250px;
        border-radius: 15px;
    }

    fieldset {
        border-radius: 15px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
            color:blue;
        }
    }
    #fieldset1 {
        width: 100%;
        margin: 0 10px;
        justify-content: space-evenly;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        img {
            width: 100%;
        }
        #fieldset1 {
            margin: 0;
        }
    }
`;