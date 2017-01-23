export default function reducer(state={
    clientCompany: '',
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    clientEmail: ''
    }, action) {

        switch (action.type) {
            case "UPDATE_CLIENT_COMPANY": {
                return {
                    ...state,
                    clientCompany: action.payload
                }
            }
            
            case "UPDATE_CLIENT_NAME": {
                return {
                    ...state,
                    clientName: action.payload
                }
            }
            
            case "UPDATE_CLIENT_ADDRESS": {
                return {
                    ...state,
                    clientAddress: action.payload
                }
            }

            case "UPDATE_CLIENT_PHONE": {
                return {
                    ...state,
                    clientPhone: action.payload
                }
            }

            case "UPDATE_CLIENT_EMAIL": {
                return {
                    ...state,
                    clientEmail: action.payload
                }
            }
        }
    return state
}