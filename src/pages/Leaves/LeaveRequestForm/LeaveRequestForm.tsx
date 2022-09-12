import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import {initialLeaveRequestData, leaveRequestValidation} from './LeaveRequestValidation';
import {FormikDatePicker, FormikInput, FormikSelect, FormikTextArea} from 'components/Formik';
import {LeaveType} from 'global/app.data';

import './LeaveRequestForm.scss';
import {formatDate} from 'utils/format';
import {isEqualDate} from '../../../utils/helper';
import Button from '../../../components/Button';

const LeaveRequestForm = () => {
    const handleSubmit = () => {}
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState<any>(null);
    const onChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className='request-form-ctn'>
            <div className="info">
                <h3 className="title">New Leave</h3>
                <h2 className='sub-title'>Pleas fill the form to apply.</h2>
            </div>
            <div className='request-form'>
                <Formik initialValues={initialLeaveRequestData}
                        validationSchema={leaveRequestValidation}
                        onSubmit={handleSubmit} >
                    {() => (
                        <Form>
                            <div className="form-content">
                                <div>
                                    <FormikInput label='Reason' name='reason'></FormikInput>
                                    <FormikTextArea label='Description' name='description'></FormikTextArea>
                                    <FormikSelect label='Type' name='type' options={LeaveType} />
                                </div>
                                <div className='date-picker'>
                                    <FormikDatePicker label='Date' name='leaveDate'
                                                      startDate={startDate}
                                                      endDate={endDate}
                                                       onChange={onChange}
                                                      selectsRange
                                                      inline
                                    />
                                </div>
                            </div>
                                <div className='leave-taken'>
                                    {startDate && <span>Leave Taken: </span>}
                                    {startDate && <span>{formatDate(startDate)}</span>}
                                    {endDate && !isEqualDate(startDate, endDate) && <span>{' - ' + formatDate(endDate)}</span>}
                                </div>
                            <div className="btn-ctn">
                                <Button>Request Leave</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

     )
}
export default LeaveRequestForm;