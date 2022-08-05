// import BusinessUnit from "../src/component/BusinessUnit/BusinessUnit";
import { config } from "./config";

const { apiURL } = config;

const urlConstant = {
  BusinessUnit: {
    getBussinssUnitData: `${apiURL}bussinessUnit/BusinessUnit_GetData`,
    BusinessUnitPostData: `${apiURL}bussinessUnit/BusinessUnit_PostData`,
    BusinessUnitDeleteData: `${apiURL}bussinessUnit/BusinessUnit_DeleteData`,
    BusinessUnitUpdateData: `${apiURL}bussinessUnit/BusinessUnit_UpdateData`,
    BusinessUnitFindData: `${apiURL}bussinessUnit/BusinessUnit_FindData`,
    
  },

  functionalGroup: {
    getFunctionalData: `${apiURL}functionalgroup/FunctionalGroup_GetData`,
    functionalPostData: `${apiURL}functionalgroup/FunctionalGroup_PostData`,
    functionalDeleteData: `${apiURL}functionalgroup/FunctionalGroup_DeleteData`,
    functionalFindData: `${apiURL}functionalgroup/FunctionalGroup_FindData`,
    functionalUpdateData: `${apiURL}functionalgroup/FunctionalGroup_UpdateData`,
  },
};

export { urlConstant as default };
