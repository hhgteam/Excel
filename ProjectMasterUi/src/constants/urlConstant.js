// import BusinessUnit from "../src/component/BusinessUnit/BusinessUnit";
import { config } from "./config";

const {apiURL} = config

const urlConstant ={

    BusinessUnit:{
        getBussinssUnitData : `${apiURL}bussinessUnit/BusinessUnit_GetData`,
        BusinessUnitPostData : `${apiURL}bussinessUnit/BusinessUnit_PostData`
      
    }

}

export  {urlConstant as default};