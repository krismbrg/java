/**
 * Contact Management
 * <h3>HOW TO GENERATE API CLIENTS:</h3>java -jar <a href='https://www.sangkhim.com/api/swagger-codegen-cli-2.3.1.jar' target='_blank'>C:\\swagger-codegen-cli-2.3.1.jar</a> generate -l typescript-angular -i https://www.sangkhim.com/api/swagger.json -o C:\\generated<h3>LANGUAGES:</h3>-l typescript-angular (Angular)<br />-l javascript (React)<br />-l java (Android)<br />-l objc (Objective C)<br />-l swift4 (Swift 4)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: sangkhim@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Contact } from '../model/contact';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ContactService {

    protected basePath = 'http://localhost:8080/spring_data_rdbms_mybatis';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * bla bla bla
     * bla bla bla
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAll(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAll(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/contacts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * bla bla bla
     * bla bla bla
     * @param a Variable a
     * @param b Variable b
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public testRequestParam(a: number, b: number, observe?: 'body', reportProgress?: boolean): Observable<Contact>;
    public testRequestParam(a: number, b: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Contact>>;
    public testRequestParam(a: number, b: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Contact>>;
    public testRequestParam(a: number, b: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (a === null || a === undefined) {
            throw new Error('Required parameter a was null or undefined when calling testRequestParam.');
        }
        if (b === null || b === undefined) {
            throw new Error('Required parameter b was null or undefined when calling testRequestParam.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (a !== undefined) {
            queryParameters = queryParameters.set('a', <any>a);
        }
        if (b !== undefined) {
            queryParameters = queryParameters.set('b', <any>b);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Contact>(`${this.basePath}/test-request-param`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
