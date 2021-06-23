import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Document } from "src/app/shared/models/document";
import * as AppState from '../../../state/app.state';
import * as DocumentActions from './document.actions';

export interface State extends AppState.State{
    documents: DocumentState
}

export interface DocumentState {
   recentDocuments: Document[];
   yourDocuments: Document[];
   pinnedDocuments: Document[];

   recentDocumentsError: string;
   pinnedDocumentsError: string;
   yourDocumentsError: string;
}

const initialState: DocumentState = {
    recentDocuments: [],
    yourDocuments: [],
    pinnedDocuments: [],
    recentDocumentsError: '',
    pinnedDocumentsError: '',
    yourDocumentsError: ''
}

const getProductFeatureState = createFeatureSelector<DocumentState>('documents');

// We make selectors for all of our properties
export const getRecentDocuments = createSelector(
    getProductFeatureState,
    state => state.recentDocuments
)

export const getAllDocuments = createSelector(
    getProductFeatureState,
    state => state.yourDocuments
)

export const getPinnedDocuments = createSelector(
    getProductFeatureState,
    state => state.pinnedDocuments
)

export const getRecentDocumentsError = createSelector(
    getProductFeatureState,
    state => state.recentDocumentsError
)

export const getPinnedDocumentsError = createSelector(
    getProductFeatureState,
    state => state.pinnedDocumentsError
)

export const getYourDocumentsError = createSelector(
    getProductFeatureState,
    state => state.yourDocumentsError
)

export const documentReducer = createReducer<DocumentState>(
    initialState,
    on(DocumentActions.loadRecentDocumentsSuccess, (state, action): DocumentState=>{
        return{
        ...state,
        recentDocuments: action.documents,
        recentDocumentsError: ''
        }
    }),
    on(DocumentActions.loadRecentDocumentsFailure, (state, action): DocumentState => {
        return {
            ...state,
            recentDocumentsError: action.error
        }
    }),

    on(DocumentActions.loadAllDocumentsSuccess, (state, action): DocumentState =>{
        return {
            ...state,
            yourDocuments: action.documents
        }
    }),
    on(DocumentActions.loadAllDocumentsFailure, (state, action): DocumentState=>{
        return {
            ...state,
            yourDocumentsError: action.error
        }
    }),
    on(DocumentActions.loadPinnedDocumentsSuccess, (state, action): DocumentState=>{
        return {
            ...state,
            pinnedDocuments: action.documents
        }
    }),
    on(DocumentActions.loadPinnedDocumentsFailure, (state, action): DocumentState=>{
        return {
            ...state,
            pinnedDocumentsError: action.error
        }
    }),
    on(DocumentActions.pinnDocumentSuccess, (state, action): DocumentState=>{
        const documentsAfterPin = state.pinnedDocuments.filter(item => item._id != action.document._id);
        return {
            ...state,
            pinnedDocuments: documentsAfterPin
        }
    })
);