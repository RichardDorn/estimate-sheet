export default function reducer(state={
    estimateNumber: '',
    projectAddress: ''
    }, action) {

        switch (action.type) {
            case "UPDATE_ESTIMATE_NUMBER": {
                return {
                    ...state,
                    estimateNumber: action.payload
                }
            }
            
            case "UPDATE_PROJECT_ADDRESS": {
                return {
                    ...state,
                    projectAddress: action.payload
                }
            }
        }
    return state
}