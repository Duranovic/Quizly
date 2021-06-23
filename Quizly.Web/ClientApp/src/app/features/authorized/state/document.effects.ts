import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { DocumentsApiService } from 'src/app/core/services/documents-api.service';
import * as DocumentActions from './document.actions';

@Injectable()
export class DocumentEffects {
    constructor(private actions$: Actions, private documentService: DocumentsApiService){

    }

    loadRecentDocuments$ = createEffect(() => {
       return this.actions$.pipe(
            ofType(DocumentActions.loadRecentDocuments),
            switchMap(()=>this.documentService.getRecentDocuments().pipe(
                map(documents => { return DocumentActions.loadRecentDocumentsSuccess({ documents })}),
                catchError(error=> of(DocumentActions.loadRecentDocumentsFailure({ error })))
            ))
        )
    })

    loadAllDocuments$ = createEffect(() => {
        return this.actions$.pipe(
             ofType(DocumentActions.loadAllDocuments),
             switchMap(()=>this.documentService.getDocuments().pipe(
                 map(documents => {
                      return DocumentActions.loadAllDocumentsSuccess({ documents })}),
                      catchError(error=> of(DocumentActions.loadAllDocumentsFailure({ error })))
             ))
         )
     })

     loadPinnedDocuments$ = createEffect(()=>{
         return this.actions$.pipe(
             ofType(DocumentActions.loadPinnedDocuments),
             switchMap(()=>this.documentService.getPinnedDocuments().pipe(
                 map(documents=>{
                     return DocumentActions.loadPinnedDocumentsSuccess({documents})
                 }),
                 catchError(error=> of(DocumentActions.loadPinnedDocumentsFailure({ error })))
             ))
         )
     })

     pinDocument$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(DocumentActions.pinnDocument),
            concatMap((action)=>this.documentService.pinDocument(action.documentId).pipe(
                map(document=>{
                    return DocumentActions.pinnDocumentSuccess({document})
                }),
                catchError(error=> of(DocumentActions.loadPinnedDocumentsFailure({ error })))
            ))
        )
    })
}