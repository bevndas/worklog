import yup from 'utils/yup';

export  const initialLeaveRequestData = {
        reason: '',
        description: '',
        leaveDate: '',
        startDate: '',
        endDate: '',
        type: ''

}
export const leaveRequestValidation = {
    reason: yup.string().required(),
    description: yup.string(),
    leaveDate: yup.string().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    type: yup.string().required()
}