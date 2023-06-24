import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshStatus } from "../redux/auth/authOprations";

export function Main() {
    const  authorisation  = useSelector(state => state.authorisation);
    const dispatch = useDispatch();
console.log(authorisation);
    useEffect(() => {
        dispatch(refreshStatus())
    },[]);
    
    const route = useRoute(authorisation.stateChange);
    return (
        <NavigationContainer>
            {route}
        </NavigationContainer>
    );
};