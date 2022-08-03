import axiosInstance from './../common/Interceptor';
//import axios from 'axios';

class CommonService {
    constructor() {
    }

    httpGet = async (requestURL, authorizationRequired) => new Promise((resolve, reject) => {
        // const userresponse = JSON.parse(localStorage.getItem('user'))
        const userresponse = "";// JSON.parse(AsyncStorage.getItem('user'))

        // const options = {
        //     method: 'get',
        //     headers: {
        //         'content-type': 'application/json; charset=UTF-8'
        //     }
        // }
        axiosInstance.get(requestURL)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });

    });

    httpPost = async (requestURL, requestBody, authorizationRequired) => new Promise((resolve, reject) => {
        // const userresponse = JSON.parse(localStorage.getItem('user'))
        const userresponse = ""; // JSON.parse(AsyncStorage.getItem('user'))

        // const options = {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Accept': 'application/json, text/plain, */*'
        //     },
        //     body: JSON.stringify(requestBody)
        // }

        if (authorizationRequired && userresponse) {
            // options.headers.Authorization = `CustomBasic ${userresponse.UserId} ${userresponse.Token}`
            options.headers.Authorization = `bearer ${userresponse.accesstoken}`
        }

        axiosInstance.post(requestURL, requestBody, {
            headers: { 'Content-Type': "application/json" }
        })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });

    });

    httpPostFormData = async (requestURL, requestBody, authorizationRequired) => new Promise((resolve, reject) => {
        // const userresponse = JSON.parse(localStorage.getItem('user'))
        const userresponse = ""; // JSON.parse(AsyncStorage.getItem('user'))

        // const options = {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Accept': 'application/json, text/plain, */*'
        //     },
        //     body: JSON.stringify(requestBody)
        // }

        if (authorizationRequired && userresponse) {
            // options.headers.Authorization = `CustomBasic ${userresponse.UserId} ${userresponse.Token}`
            options.headers.Authorization = `bearer ${userresponse.accesstoken}`
        }

        axiosInstance.post(requestURL, requestBody, {
            headers: { 'Content-Type': "application/json" }
        })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });

    });

    async checkInternetConnection() {
        let data = await Network.getNetworkStateAsync();
        if (data.isConnected == false || data.type == Network.NetworkStateType.NONE) {
            return false;
        }
        else {
            return true;
        }
    }
}
export default CommonService