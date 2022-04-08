import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import {useHistory} from "react-router";
import React from "react";
import {Styled} from "../styledRequest";

export const PostRequest = () => {
    const history = useHistory();
    const goToAddInfo = (value) => {
        history.push(value);
    }
    const initialState = {
        data: []
    }
    const [state, setState] = useState(initialState);
    const {data} = state
    useEffect(() => {
        const url = "http://intern-2022.arpify.com/init";
        const article = {
            firstName: "Arsen",
            lastName: "Vardanyan",
            birthDay: "1984-08-01",
            gender: "male",
        };
        const headers = {
            "Content-Type": "application/json",
        };
        axios
            .post(url, article, {headers})
            .then((response) => setState({data: response.data}));
    }, []);

    return (
        <Styled.Root>
            <div>
                <table border="">
                    <thead>
                    <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>birthDay</th>
                        <th>gender</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {item.firstName === "Arsen" ? <Styled.Td>{item.firstName}</Styled.Td> :
                                <td>{item.firstName}</td>}
                            {item.lastName === "Vardanyan" ? <Styled.Td>{item.lastName}</Styled.Td> :
                                <td>{item.lastName}</td>}
                            {item.birthDay === "1984-08-01" ? <Styled.Td>{item.birthDay}</Styled.Td> :
                                <td>{item.birthDay}</td>}
                            {item.firstName === "Arsen" ? <Styled.Td>{item.gender}</Styled.Td> :
                                <td>{item.gender}</td>}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <Styled.Button onClick={() => goToAddInfo('NewPerson')}>New Person</Styled.Button>
            </div>
        </Styled.Root>
    );
};
