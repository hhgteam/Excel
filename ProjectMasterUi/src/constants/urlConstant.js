// import BusinessUnit from "../src/component/BusinessUnit/BusinessUnit";
import { config } from "./config";

const {apiURL} = config

const urlConstant ={

    BusinessUnit:{
        getBussinssUnitData : `${apiURL}bussinessUnit/BusinessUnit_GetData`
        // getBussinssUnitData : `${apiURL}bussinessUnit/BusinessUnit_GetData`
        // getBussinssUnitData : `${apiURL}bussinessUnit/BusinessUnit_GetData`
        // getBussinssUnitData : `${apiURL}bussinessUnit/BusinessUnit_GetData`
    }

}

export  {urlConstant as default};