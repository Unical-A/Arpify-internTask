import {Route} from "react-router";
import {routes} from "./components/routes/routes";

export const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            {routes.map((item, index) => (
                <Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    children={<item.page/>}
                />
            ))}
        </div>
    );
}


