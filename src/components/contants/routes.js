const baseUrl = "http://127.0.0.1:8000";
export const CREATE_VENDOR = baseUrl + "/api/vendor/store";

// Address API's
export const GET_GOOGLE_PLACE_API = (input) => {
    return `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:IN&key=AIzaSyA7i9FMDyjfdSCLtyV_O0zZZ4vx0z4uzHw.`
}