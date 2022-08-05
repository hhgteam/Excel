// import BusinessUnit from "../src/component/BusinessUnit/BusinessUnit";
import { config } from "./config";

const { apiURL } = config;

const urlConstant = {
  BusinessUnit: {
    getBussinssUnitData: `${apiURL}bussinessUnit/BusinessUnit_GetData`,
    BusinessUnitPostData: `${apiURL}bussinessUnit/BusinessUnit_PostData`,
    // BusinessUnitDeleteData: `${apiURL}bussinessUnit/BusinessUnit_DeleteData`,
    // BusinessUnitUpdateData: `${apiURL}bussinessUnit/BusinessUnit_UpdateData`,
  },

  functionlGroup: {
    getFunctionalData: `${apiURL}functionalgroup/FunctionalGroup_GetData`,
    functionalPostData: `${apiURL}functionalgroup/FunctionalGroup_PostData`,
  },
};

export { urlConstant as default };
