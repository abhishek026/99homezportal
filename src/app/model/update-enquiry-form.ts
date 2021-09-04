export interface updateEnquiryForm {

    comment?: any,
    status?: any,
    statusValue?: any,
    institution_id?: any,
    isEnquiryUpdate?: any,
    closedReason?: any,
    slot_id?: any,
    priority?: any,
    follow_type?: any,
    followUpDate?: any,
    commentDate?: any,
    followUpTime?: any,
    followUpDateTime?: any,
    isEnquiryV2Update?: any,
    // this property used for ProcturV2 status update..for ProcturV2 it should be Y else it should be ’N’

    isRegisterFeeUpdate?: any,
    //this is for enquiry registration fees for ProcturV2..the value of this property will be ‘Y’ in case of proctor v2 and when  enquiry
    // registration fees details are coming along with status update,

    amount?: any,
    //<amount paid ,valid if isRegisterFeeUpdate=Y>

    paymentMode?: any,
    //<payment Mode ,valid if isRegisterFeeUpdate=Y>

    paymentDate?: any,
    //<payment Date in YYYY-MM-DD format ,valid if isRegisterFeeUpdate=Y>

    reference?: any,
    //<reference no  ,valid if isRegisterFeeUpdate=Y>
    walkin_followUpDate: any,
    walkin_followUpTime: any,
    is_follow_up_time_notification: any,
}