import React , {useState , createContext} from 'react';



export const DetailbarContext = createContext();


export const DetailbarProvider = (props) => {
    const [detailbar , setDetailbar] = useState(false);






    return(
        <DetailbarContext.Provider value={[detailbar, setDetailbar]}>
            {props.children}
        </DetailbarContext.Provider>
    )
}