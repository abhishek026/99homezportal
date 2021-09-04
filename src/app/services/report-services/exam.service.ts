
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticatorService } from "../authenticator.service";
import * as moment from 'moment';


@Injectable()

export class ExamService {

    baseUrl: string = '';
    institute_id: string;
    Authorization: string;
    headers;
    isProfessional: boolean = false;

    /* set default value for each url, header and autherization on service creation */
    constructor(private http: HttpClient, private auth: AuthenticatorService) {
        this.auth.currentAuthKey.subscribe(key => {
            this.Authorization = key;
            this.headers = new HttpHeaders(
                { "Content-Type": "application/json", "Authorization": this.Authorization });
        })
        this.auth.currentInstituteId.subscribe(id => {
            this.institute_id = id;
        });
        this.baseUrl = this.auth.getBaseUrl();
        this.auth.institute_type.subscribe(
            res => {
                if (res == 'LANG') {
                    this.isProfessional = true;
                } else {
                    this.isProfessional = false;
                }
            }
        )
    }

    ExamReport(): Observable<any> {
        let url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/all";
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => {
                return res;
            },
            err => {
                return err;
            }
        ))
    }

    batchExamReport(obj): Observable<any> {
        let url = this.baseUrl + "/api/v1/batches/fetchCombinedBatchData/" + this.institute_id + "?standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&assigned=N";
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => {
                return res;
            },
            err => {
                return err;
            }

        ))
    }

    getCourses(obj): Observable<any> {
        let url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + obj
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    getSubject(obj) {
        let url = this.baseUrl + "/api/v1/courseMaster/fetch/courses/" + this.institute_id + "/" + obj
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    getExamSchedule(obj) {
        let url = this.baseUrl + "/api/v1/batchExamSched/" + obj
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    viewExamData(obj) {
        let url = this.baseUrl + "/api/v1/reports/StdExam"
        return this.http.post(url, obj, { headers: this.headers }).pipe(map(
            res => {
                return res;
            },
            err => {
                return err;
            }
        ))
    }

    viewDetailData(obj) {
        let url = this.baseUrl + "/api/v1/reports/StdExam/" + obj
        return this.http.get(url, { headers: this.headers }).pipe(map(
            res => {
                return res;
            },
            err => {
                return err;
            }
        ))
    }

    //   New Exam Report APIs
    getAllExamReport(obj) {
        console.log("obj", obj);
        let url: any;
        if (obj.from_date == null || obj.from_date == "") {
            url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?master_course_name=" + obj.master_course_name + "&standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&from_date=" + obj.from_date + "&to_date=" + obj.to_date;
        }
        else {
            url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?master_course_name=" + obj.master_course_name + "&standard_id=" + obj.standard_id + "&subject_id=" + obj.subject_id + "&from_date=" + moment(obj.from_date).format("YYYY-MM-DD") + "&to_date=" + moment(obj.to_date).format("YYYY-MM-DD");
        }

        // let url = this.baseUrl + "/api/v1/reports/StdExam/examReport/" + this.institute_id + "?from_date="+obj.from_date+"&to_date="+obj.to_date
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    getCourseWiseReport(course_id) {
        let url = "";
        if (!this.isProfessional) {
            url = this.baseUrl + "/api/v1/reports/StdExam/examReport/courseWise/" + this.institute_id + "?course_id=" + course_id;
        }
        else {
            url = this.baseUrl + "/api/v1/reports/StdExam/examReport/courseWise/" + this.institute_id + "?batch_id=" + course_id;
        }
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    getExamWiseReport(exam_schd_id, examSchdlType) {
        let url = "";
        if (!this.isProfessional) {
            if (examSchdlType) {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
            }
            else {
                url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?course_exam_schedule_id=" + exam_schd_id; // for course model
            }
        }
        else {
            url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for batch model
        }
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    getSubjectWiseReport(subject_id) {
        let url = this.baseUrl + "/api/v1/reports/StdExam/examReport/examWise/performance/" + this.institute_id + "?subject_id=" + subject_id;
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

    downloadExamReport(exam_schd_id, examSchdlType) {
        let url = "";
        if (!this.isProfessional) {
            if (examSchdlType) {
                url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
            }
            else {
                url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?course_exam_schedule_id=" + exam_schd_id; // for course model
            }
        }
        else {
            url = this.baseUrl + "/api/v1/reports/StdExam/downloadExamReport/examWise/" + this.institute_id + "?exam_schedule_id=" + exam_schd_id; // for course model
        }
        return this.http.get(url, { headers: this.headers }).pipe(map(
            data => {
                return data;
            },
            error => {
                return error;
            }
        ))
    }

}
