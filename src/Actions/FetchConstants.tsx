import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { FETCH_CONSTANT } from "../Constants/TypesRequest";
import { GET_ALL_HERO_ITEM } from "../GraphQL/Query";
import { useAppDispatch } from "../Utils/Hooks";

function FetchConstants(): JSX.Element {

    const { error, loading, data } = useQuery(GET_ALL_HERO_ITEM);
    const dispatch = useAppDispatch();
    useEffect(() => {
    if (data) {
        dispatch({
        type: FETCH_CONSTANT,
        payload: data.constants 
        })
    }
    }, [data]);

    return (<> </>);
}

export default FetchConstants;
