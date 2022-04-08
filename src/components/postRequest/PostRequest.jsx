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
                    {data.map((item) => (
                        <>
                            {(item.firstName === "Arsen" &&
                                item.lastName === "Vardanyan" &&
                                item.birthDay === "1984-08-01" &&
                                item.gender === "male") ?
                                <tr>
                                    <Styled.Td>{item.firstName}</Styled.Td>
                                    <Styled.Td>{item.lastName}</Styled.Td>
                                    <Styled.Td>{item.birthDay}</Styled.Td>
                                    <Styled.Td>{item.gender}</Styled.Td>
                                </tr> :
                                <tr>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.birthDay}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            }
                        </>
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
