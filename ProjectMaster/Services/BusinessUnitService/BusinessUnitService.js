// const BusinessUnit = require("../../model/BusinessUnitModel");
const BussinessUnitModel = require("../../model/BusinessUnitModel");

// exports.insertBussenessUnitData = async function (req, res, next) {
//   try {
//     const data = await BusinessUnit.create(req.body);
//     return res.status(200).json({ status: "success", data: data });
//   } catch (error) {
//    // console.log("Catch Error " + error);
//     return res.status(404).json({
//         status: "Error",
//         error
//     });
//   }
// };

// exports.getBussenessUnitData = async function (req, res, next) {
//     try {
//         const data = await BusinessUnit.find();
//         res.status(201).json({ status: "success", data: data });
//       } catch (error) {
//         return res.status(404).json({
//             status: "Error",
//             error
//         });

//       }
//   };

exports.BusinessUnit_PostData = async function (req, res, next) {
  try {
    const Business_PostData_Data = {
      Name: req.body.Name,
      CreateBy: req.body.CreateBy,
      ModifiedBy: req.body.ModifiedBy,
    };
    const BusinessUnit_PostData_Data = await BussinessUnitModel.create(
      Business_PostData_Data
    );
    return res.status(201).json({
      status: "success",
      data: BusinessUnit_PostData_Data,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.BusinessUnit_GetData = async function (req, res, next) {
  try {
    const BusinessUnit_Getdata = await BussinessUnitModel.find();
    return res.status(200).json({
      status: "success",
      data: BusinessUnit_Getdata,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.BusinessUnit_DeleteData = async function (req, res, next) {
  try {
    await BussinessUnitModel.findByIdAndDelete(req.params.id);
    return res.status(202).json({
      status: "success",
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(204).json({
      status: "Error",
      error,
    });
  }
};

exports.BusinessUnit_FindData = async function (req, res, next) {
  try {
    const BusinessUnit_FindData_Data = await BussinessUnitModel.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      data : BusinessUnit_FindData_Data
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(204).json({
      status: "Error",
      error,
    });
  }
};


exports.BusinessUnit_UpdateData = async function (req, res, next) {

  try {
    const Business_FindById_Data = await BussinessUnitModel.findById(req.params.id);
      Business_FindById_Data.Name = req.body.Name;
      Business_FindById_Data.CreateBy = req.body.CreateBy;
      Business_FindById_Data.ModifiedBy = req.body.ModifiedBy;

  
    const BusinessUnit_UpdateData_data = await BussinessUnitModel.findByIdAndUpdate(req.params.id , Business_FindById_Data)
    return res.status(202).json({
      status: "success",
      data: BusinessUnit_UpdateData_data,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};