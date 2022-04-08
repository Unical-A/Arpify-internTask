import {NewPerson} from "../newPerson";
import {PostRequest} from "../postRequest";

export const routes = [
    {
        path: "/",
        exact: true,
        page: () => <PostRequest/>,
    },
    {
        path: "/newPerson",
        exact: true,
        page: () => <NewPerson/>,
    },
];
