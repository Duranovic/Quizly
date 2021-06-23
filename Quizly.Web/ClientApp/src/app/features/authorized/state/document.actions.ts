import { createAction, props } from "@ngrx/store";
import { Document } from "src/app/shared/models/document";

export const loadRecentDocuments = createAction(
    '[Document] Load Recent Documents',
)

export const loadRecentDocumentsSuccess = createAction(
    '[Document] Load Recent Documents Success',
    props<{documents: any}>()
);

export const loadRecentDocumentsFailure = createAction(
    '[Document] Load Recent Documents Failure',
    props<{error: string}>()
)

export const loadAllDocuments = createAction(
    '[Document] Load All Documents',
)

export const loadAllDocumentsSuccess = createAction(
    '[Document] Load All Documents Success',
    props<{documents: any}>()
);

export const loadAllDocumentsFailure = createAction(
    '[Document] Load All Documents Failure',
    props<{error: string}>()
);

export const loadPinnedDocuments = createAction(
    '[Document] Load Pinned Documents',
)

export const loadPinnedDocumentsSuccess = createAction(
    '[Document] Load Pinned Documents Success',
    props<{documents: any}>()
);

export const loadPinnedDocumentsFailure = createAction(
    '[Document] Load Pinned Documents Failure',
    props<{error: string}>()
);

export const pinnDocument = createAction(
    '[Document] Pin document',
    props<{documentId: string}>()
)

export const pinnDocumentSuccess = createAction(
    '[Document] Pin document Success',
    props<{document: Document}>()
)

export const pinnDocumentFailure = createAction(
    '[Document] Pin document Failure',
    props<{error: string}>()
)